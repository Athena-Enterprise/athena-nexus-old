<template>
    <button class="discord-login-button" @click="loginWithDiscord">
      <i class="fab fa-discord"></i> Login with Discord
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      loginWithDiscord() {
        const clientId = 'YOUR_DISCORD_CLIENT_ID';
        const redirectUri = encodeURIComponent('http://localhost:8080/dashboard');
        const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
        window.location.href = discordAuthUrl;
      },
    },
  };
  </script>
  