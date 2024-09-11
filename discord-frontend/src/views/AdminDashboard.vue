<template>
  <div>
    <h1>Admin Dashboard</h1>
    <p>Manage all servers here:</p>
    <ul>
      <li v-for="bot in bots" :key="bot.id">{{ bot.name }} - Managed by {{ bot.owner }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bots: [
        { id: 1, name: 'Server 1 Bot', owner: 'User A' },
        { id: 2, name: 'Server 2 Bot', owner: 'User B' }
      ]
    }
  }
}
</script>
