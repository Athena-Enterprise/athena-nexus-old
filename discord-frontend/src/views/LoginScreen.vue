<template>
    <div class="login-screen">
      <div class="login-panel">
        <img src="@/assets/default-avatar.png" alt="Bot Icon" class="user-avatar">
        <h2>Welcome to Athena Nexus</h2>
        <DiscordLogin />
      </div>
    </div>
  </template>
  
  <script>
  import DiscordLogin from '../components/DiscordLogin.vue';
  
  export default {
    name: 'LoginScreen',
    components: { DiscordLogin },
  };
  </script>
  