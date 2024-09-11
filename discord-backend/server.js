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
  const discordOAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
  res.redirect(discordOAuthUrl);
});

// OAuth2 Callback Route for Discord
app.get('/callback', async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('No code provided');
  }

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

    // Use access token to get user info
    const userData = await axios.get('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const { id, username, discriminator } = userData.data;

    // Store user in PostgreSQL (adjust SQL query as per your table schema)
    await dbPool.query('INSERT INTO users (discord_id, username, discriminator) VALUES ($1, $2, $3) ON CONFLICT (discord_id) DO NOTHING', [id, username, discriminator]);

    // Redirect to the dashboard
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error exchanging code:', error.response ? error.response.data : error.message);
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

// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
