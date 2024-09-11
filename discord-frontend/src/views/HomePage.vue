<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
    <h1 class="text-4xl font-bold mb-6">Welcome to Athena Nexus</h1>
    <p class="mb-4">Manage your Discord bot and server with ease.</p>
    <router-link to="/login" class="btn btn-primary">Login</router-link>
    <router-link to="/register" class="btn btn-secondary ml-4">Register</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
