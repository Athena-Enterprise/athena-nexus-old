<template>
  <div>
    <h1>Register your bot</h1>
    <form @submit.prevent="registerUser">
      <input v-model="username" placeholder="Discord Username" required />
      <input v-model="email" placeholder="Email" required type="email" />
      <input v-model="serverName" placeholder="Server Name" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      serverName: ''
    }
  },
  methods: {
    registerUser() {
      // Submit the data to your backend API
      console.log(this.username, this.email, this.serverName)
    }
  }
}
</script>
