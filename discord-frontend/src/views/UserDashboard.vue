<template>
    <div class="dashboard">
      <h1>Welcome, {{ user.username }}</h1>
      <div v-if="bots.length">
        <h2>Your Bots</h2>
        <ul>
          <li v-for="bot in bots" :key="bot.id">{{ bot.name }}</li>
        </ul>
      </div>
      <div v-else>
        <h2>No bots found</h2>
        <router-link to="/create-bot">Create a new bot</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      user() {
        return this.$store.state.user;
      },
      bots() {
        return this.$store.state.bots;
      },
    },
  };
  </script>
  