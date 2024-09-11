import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../views/UserLogin.vue'; // Updated the component name
import UserDashboard from '../views/UserDashboard.vue'; // Updated the component name
import CreateBot from '../views/CreateBot.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'user-login', component: UserLogin }, // Use multi-word name for the route
  { path: '/user-dashboard', name: 'user-dashboard', component: UserDashboard }, // Multi-word component name
  { path: '/create-bot', name: 'create-bot', component: CreateBot },
  { path: '/admin-dashboard', name: 'admin-dashboard', component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
