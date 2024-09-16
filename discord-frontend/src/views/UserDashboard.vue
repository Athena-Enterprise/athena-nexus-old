<template>
  <div class="user-dashboard">
    <h1>Your Server Commands</h1>
    
    <div v-for="command in commands" :key="command.name" class="command-item">
      <label>{{ command.name }}</label>
      <input type="checkbox" v-model="command.enabled" @change="toggleCommand(command)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';  // Import axios here

export default {
  data() {
    return {
      commands: [],
      serverId: '',  // Store the server ID for which this user is managing commands
    };
  },
  methods: {
    async fetchCommands() {
      try {
        const response = await axios.get(`/api/server-commands?server_id=${this.serverId}`);
        this.commands = response.data.commands;
      } catch (error) {
        console.error('Error fetching commands:', error);
      }
    },
    async toggleCommand(command) {
      try {
        await axios.post('/api/update-server-commands', {
          server_id: this.serverId,
          command_name: command.name,
          enabled: command.enabled,
        });
      } catch (error) {
        console.error('Error updating command status:', error);
      }
    }
  },
  mounted() {
    // Get server ID from session or URL (adjust based on your setup)
    this.serverId = localStorage.getItem('serverId') || ''; // Replace with actual logic
    this.fetchCommands();
  }
};
</script>

<style scoped>
.user-dashboard {
  padding: 20px;
}
.command-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.command-item label {
  margin-right: 10px;
}
</style>
