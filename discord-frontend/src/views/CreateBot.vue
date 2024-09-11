<template>
    <div class="create-bot">
      <h1>Create Your Bot</h1>
      <form @submit.prevent="submitForm">
        <label for="botName">Bot Name:</label>
        <input type="text" v-model="botName" required />
  
        <label for="serverMembers">How many members does your server have?</label>
        <input type="number" v-model="serverMembers" required />
  
        <label for="heardAbout">How did you hear about us?</label>
        <input type="text" v-model="heardAbout" required />
  
        <button type="submit">Create Bot</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        botName: '',
        serverMembers: '',
        heardAbout: '',
      };
    },
    methods: {
      async submitForm() {
        const botData = {
          name: this.botName,
          serverMembers: this.serverMembers,
          heardAbout: this.heardAbout,
        };
        // Make API request to create bot
        await this.$axios.post('/api/create-bot', botData);
        // Redirect to dashboard
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  