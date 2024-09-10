const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const crypto = require('crypto');
const app = express();

// OAuth2 configuration for Discord
const clientId = '1283070994965069878';
const clientSecret = 'tLUw8D3XHuIZW5SM3DSoGLQVhJ7V9rSd';
const redirectUri = 'https://nexus.athenanetwork.gg/callback';

// Secret token for verifying GitHub webhook signature
const webhookSecret = '/Xr=yh1P|B0'B9i'; // Replace this with the secret you set in GitHub Webhook

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
        // Exchange authorization code for access token
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

    // Check if the push event was for the main branch
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

// Start the server
app.listen(3001, () => {
    console.log('Server running on port 3001');
});
