const express = require('express');
const axios = require('axios');
const app = express();

const clientId = '1283070994965069878';
const clientSecret = 'tLUw8D3XHuIZW5SM3DSoGLQVhJ7V9rSd';
const redirectUri = 'https://nexus.athenanetwork.gg/callback'; // Your redirect URI

app.get('/callback', async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send('No code provided');
    }

    try {
        // Exchange the authorization code for an access token
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

        // Now you can use the access token to make API requests or store it for later
        res.send(`Bot added successfully! Access token: ${accessToken}`);
    } catch (error) {
        console.error('Error exchanging code:', error.response ? error.response.data : error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});

