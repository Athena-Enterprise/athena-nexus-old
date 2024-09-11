import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Vuex store for handling authentication state

const app = createApp(App);

// Example of hydrating store with user data from localStorage
const userData = localStorage.getItem('user');
if (userData) {
  store.commit('SET_USER', JSON.parse(userData));
  store.commit('SET_AUTHENTICATED', true);
}

app.use(router).use(store).mount('#app');
