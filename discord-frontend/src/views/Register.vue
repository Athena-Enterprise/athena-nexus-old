<template>
    <div class="register-page">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      <a href="/login">Already have an account? Login</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      register() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords don't match");
          return;
        }
        // Registration logic here (use your backend API)
        console.log(`Registering: ${this.email}`);
      }
    }
  };
  </script>
  