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

// OAuth2 configuration for Discord
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

// Secret token for verifying GitHub webhook signature
const webhookSecret = process.env.WEBHOOK_SECRET;

// Middleware for parsing JSON bodies and verifying GitHub Webhook signature
app.use(bodyParser.json({
  verify: (req, res, buf, encoding) => {
    const signature = req.headers['x-hub-signature-256'];
    if (!signature) {
      return res.status(403).send('Signature required');
    }

    const hmac = crypto.createHmac('sha256', webhookSecret);
    hmac.update(buf);
    const digest = `sha256=${hmac.digest('hex')}`;

    if (signature !== digest) {
      return res.status(403).send('Invalid signature');
    }
  }
}));

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
      redirect_uri: redirectUri
    }).toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const accessToken = tokenResponse.data.access_token;
    res.send(`Bot added successfully! Access token: ${accessToken}`);
  } catch (error) {
    console.error('Error exchanging code:', error.response ? error.response.data : error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Webhook Listener for GitHub (Auto-deploy)
app.post('/deploy', (req, res) => {
  const payload = req.body;

  console.log('Received GitHub Webhook Payload:', JSON.stringify(payload, null, 2));

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

// Handle PostgreSQL Data for Dashboard
app.post('/update-server-commands', async (req, res) => {
  const { server_id, enabled_commands } = req.body;

  try {
    // Update PostgreSQL with the new enabled commands
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

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
