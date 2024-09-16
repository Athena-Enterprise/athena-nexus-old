<template>
  <div class="create-bot">
    <h1>Select a Server to Add Athena Bot</h1>
    
    <div v-if="loading" class="loading-spinner">Loading...</div>
    
    <div v-if="!loading">
      <label for="server-select">Select a Server</label>
      <select v-model="selectedServer">
        <option v-for="server in servers" :key="server.id" :value="server.id">
          {{ server.name }}
        </option>
      </select>
      
      <div v-if="selectedServer" class="setup-questions">
        <h3>Setup Questions</h3>

        <!-- Question 1: Admin Users -->
        <label>Select Admin Users</label>
        <select v-model="selectedAdmins" multiple>
          <option v-for="user in members" :key="user.id" :value="user.id">
            {{ user.username }}
          </option>
        </select>

        <!-- Question 2: How did you hear about us? -->
        <label>How did you hear about Athena Nexus?</label>
        <input v-model="howDidYouHear" type="text" placeholder="Friend, Social Media, etc." />

        <!-- Question 3: Select a Plan -->
        <label>Select a Plan</label>
        <select v-model="selectedPlan">
          <option value="free">Free Plan</option>
          <option value="pro">Pro Plan - $9.99/month</option>
          <option value="ultra">Ultra Plan - $19.99/month</option>
        </select>

        <!-- Finalize Button -->
        <button @click="addBotToServer" class="cta-button primary">Add Bot to Server</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servers: [],
      members: [],
      selectedServer: '',
      selectedAdmins: [],
      howDidYouHear: '',
      selectedPlan: 'free',
      loading: true,
    };
  },
  methods: {
    async fetchUserGuilds() {
      try {
        const response = await axios.get('/api/servers');
        this.servers = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    },
    async fetchServerMembers() {
      try {
        if (this.selectedServer) {
          const response = await axios.get(`/api/members?server_id=${this.selectedServer}`);
          this.members = response.data;
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    },
    async addBotToServer() {
      try {
        await axios.post('/api/add-bot', {
          server_id: this.selectedServer,
          admin_ids: this.selectedAdmins,
          how_did_you_hear: this.howDidYouHear,
          plan: this.selectedPlan,
        });
        alert('Bot added successfully!');
        window.location.href = '/dashboard'; // Redirect to the user dashboard
      } catch (error) {
        console.error('Error adding bot to server:', error);
      }
    },
  },
  watch: {
    selectedServer() {
      this.fetchServerMembers(); // Fetch members when a server is selected
    },
  },
  mounted() {
    this.fetchUserGuilds(); // Fetch the user's available servers when the component loads
  },
};
</script>

<style scoped>
/* Add some styling */
.create-bot {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.loading-spinner {
  font-size: 20px;
}
.cta-button {
  margin-top: 20px;
}
</style>
