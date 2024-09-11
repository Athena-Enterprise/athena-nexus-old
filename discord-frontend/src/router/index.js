import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from '../views/LoginScreen.vue';
import Dashboard from '../views/Dashboard.vue';
import CreateBot from '../views/CreateBot.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'login', component: LoginScreen },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/create-bot', name: 'create-bot', component: CreateBot },
  { path: '/admin-dashboard', name: 'admin-dashboard', component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
