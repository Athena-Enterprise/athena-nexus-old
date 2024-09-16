require('dotenv').config({ path: '/home/itzdusty/athena-nexus/.env' });

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const { exec } = require('child_process');
const crypto = require('crypto');
const app = express();

// PostgreSQL setup
const dbPool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Discord OAuth2 configuration
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

// GitHub Webhook Secret
const webhookSecret = process.env.WEBHOOK_SECRET;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// OAuth2 Login Redirect
app.get('/login', (req, res) => {
  const discordOAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify%20bot%20applications.commands&permissions=8`;

  res.redirect(discordOAuthUrl);
});

const session = require('express-session');

// Initialize session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,  // Set this in your .env
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.ENVIRONMENT === 'production' }  // Use secure cookies in production
}));

// After Discord OAuth, store the access token in the session
app.get('/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send('No code provided');

  try {
    const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    }).toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const accessToken = tokenResponse.data.access_token;

    req.session.accessToken = accessToken;  // Store in session for later use

    // Redirect to CreateBot or User Dashboard
    res.redirect('/create-bot');
  } catch (error) {
    console.error('Error exchanging code:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch user bots (Admin or user-specific dashboard data)
app.get('/api/bots', async (req, res) => {
  try {
    const { rows: bots } = await dbPool.query('SELECT * FROM bots');
    res.status(200).json(bots);
  } catch (error) {
    console.error('Error fetching bots:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Admin route to delete a bot
app.delete('/api/bots/:id', async (req, res) => {
  const botId = req.params.id;

  try {
    await dbPool.query('DELETE FROM bots WHERE id = $1', [botId]);
    res.sendStatus(204); // No content after deletion
  } catch (error) {
    console.error('Error deleting bot:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Webhook Listener for GitHub (Auto-deploy)
app.post('/deploy', (req, res) => {
  const payload = req.body;

  // Verify the payload signature
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) {
    return res.status(403).send('Signature required');
  }

  const hmac = crypto.createHmac('sha256', webhookSecret);
  hmac.update(JSON.stringify(payload));
  const digest = `sha256=${hmac.digest('hex')}`;

  if (signature !== digest) {
    return res.status(403).send('Invalid signature');
  }

  if (payload.ref === 'refs/heads/main') {
    exec('bash /home/itzdusty/athena-nexus/deploy.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Exec error: ${error}`);
        return res.status(500).send(`Deployment failed: ${stderr}`);
      }
      console.log(`Deployment output: ${stdout}`);
      res.status(200).send('Deployment successful');
    });
  } else {
    res.status(200).send('Not the main branch. Ignored.');
  }
});

// Update Server Commands (API Route for Dashboard)
app.post('/update-server-commands', async (req, res) => {
  const { server_id, enabled_commands } = req.body;

  try {
    await dbPool.query(
      'INSERT INTO guild_config (guild_id, enabled_commands) VALUES ($1, $2) ON CONFLICT (guild_id) DO UPDATE SET enabled_commands = $2',
      [server_id, enabled_commands]
    );

    res.status(200).send('Commands updated successfully.');
  } catch (error) {
    console.error('Error updating commands:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch the user's available servers
app.get('/api/servers', async (req, res) => {
  const accessToken = req.session.accessToken; // Use the stored access token
  try {
    const response = await axios.get('https://discord.com/api/users/@me/guilds', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching servers:', error);
    res.status(500).send('Error fetching servers');
  }
});

// Fetch the members of a specific server
app.get('/api/members', async (req, res) => {
  const { server_id } = req.query;
  const accessToken = req.session.accessToken;
  
  try {
    const response = await axios.get(`https://discord.com/api/guilds/${server_id}/members`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).send('Error fetching members');
  }
});

// Add the bot to the server and save the configuration
app.post('/api/add-bot', async (req, res) => {
  const { server_id, admin_ids, how_did_you_hear, plan } = req.body;

  try {
    // Store server info and configuration in the database
    await dbPool.query(
      'INSERT INTO server_settings (guild_id, admin_ids, plan, heard_about) VALUES ($1, $2, $3, $4)',
      [server_id, admin_ids, plan, how_did_you_hear]
    );
    res.status(200).send('Bot added successfully');
  } catch (error) {
    console.error('Error adding bot to server:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch the list of commands for a specific server
app.get('/api/server-commands', async (req, res) => {
  const { server_id } = req.query;

  try {
    const { rows } = await dbPool.query('SELECT * FROM guild_config WHERE guild_id = $1', [server_id]);
    if (rows.length === 0) {
      return res.status(404).send('No commands found for this server.');
    }

    const enabledCommands = rows[0].enabled_commands;
    res.json({ commands: enabledCommands });
  } catch (error) {
    console.error('Error fetching server commands:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update the command status for a specific server
app.post('/api/update-server-commands', async (req, res) => {
  const { server_id, command_name, enabled } = req.body;

  try {
    // Fetch the current commands configuration
    const { rows } = await dbPool.query('SELECT enabled_commands FROM guild_config WHERE guild_id = $1', [server_id]);
    
    if (rows.length === 0) {
      return res.status(404).send('No server found.');
    }

    // Update the enabled status of the command
    let enabledCommands = rows[0].enabled_commands;
    enabledCommands = enabledCommands.map(command => {
      if (command.name === command_name) {
        command.enabled = enabled;
      }
      return command;
    });

    // Update the database with the modified commands
    await dbPool.query('UPDATE guild_config SET enabled_commands = $1 WHERE guild_id = $2', [enabledCommands, server_id]);
    
    res.status(200).send('Command status updated successfully.');
  } catch (error) {
    console.error('Error updating server commands:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});