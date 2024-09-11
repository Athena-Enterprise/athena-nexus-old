<template>
    <div class="admin-dashboard">
      <SideBar />
      <div class="main-content">
        <div class="top-header">
          <h1>Admin Dashboard</h1>
          <p>Manage all user bots, view statistics, and control platform-wide settings</p>
        </div>
  
        <!-- Overview Section -->
        <div class="overview-section">
          <StatCard title="Total Bots">
            <template v-slot:icon>
              <i class="fas fa-robot"></i> <!-- Font Awesome icon for bots -->
            </template>
            {{ totalBots }}
          </StatCard>
          <StatCard title="Total Users">
            <template v-slot:icon>
              <i class="fas fa-users"></i>
            </template>
            {{ totalUsers }}
          </StatCard>
          <StatCard title="Monthly Transactions">
            <template v-slot:icon>
              <i class="fas fa-money-bill-alt"></i>
            </template>
            ${{ monthlyTransactions }}
          </StatCard>
        </div>
  
        <!-- Bot Management Section -->
        <div class="bot-management-section">
          <h2>User Bots</h2>
          <table class="bot-table">
            <thead>
              <tr>
                <th>Bot Name</th>
                <th>Owner</th>
                <th>Server</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bot in bots" :key="bot.id">
                <td>{{ bot.name }}</td>
                <td>{{ bot.owner }}</td>
                <td>{{ bot.server }}</td>
                <td>{{ bot.status }}</td>
                <td>
                  <button @click="deleteBot(bot.id)" class="delete-btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import StatCard from '../components/StatCard.vue';
  import SideBar from '../components/SideBar.vue';
  
  export default {
    name: 'AdminDashboard',
    components: { StatCard, SideBar },
    data() {
      return {
        totalBots: 100, // This would come from your API/backend
        totalUsers: 50, // Also from API
        monthlyTransactions: 5000, // Example value
        bots: [
          { id: 1, name: 'Athena Bot', owner: 'User1', server: 'Server 1', status: 'Active' },
          { id: 2, name: 'Nexus Bot', owner: 'User2', server: 'Server 2', status: 'Inactive' },
          // Fetch more from API
        ],
      };
    },
    methods: {
      deleteBot(botId) {
        // Send a request to backend to delete bot
        console.log(`Bot with ID ${botId} deleted.`);
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    display: flex;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
  }
  
  .top-header {
    margin-bottom: 20px;
  }
  
  .overview-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .bot-management-section {
    margin-top: 30px;
  }
  
  .bot-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .bot-table th, .bot-table td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .delete-btn {
    background-color: red;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
  </style>
  