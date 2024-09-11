<template>
    <div class="dashboard">
      <h1>Welcome to your Dashboard</h1>
      <p>Manage your bot and server settings here.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
    mounted() {
      // Fetch user data and settings from the API
      console.log("Fetching user data for dashboard...");
    }
  };
  </script>
  