<template>
  <div>
    <h1>Login</h1>
    <a :href="discordLoginUrl">Login with Discord</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discordLoginUrl: 'https://discord.com/api/oauth2/authorize?client_id=1283070994965069878&redirect_uri=https://nexus.athenanetwork.gg/callback&response_type=code&scope=identify%20guilds'
    }
  }
}
</script>
