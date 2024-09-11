<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ user.name }}!</p>
    <p>Manage your server settings here:</p>
    <!-- Settings and bot management -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Your Discord Username'
        // Fetch user data after authentication
      }
    }
  }
}
</script>
