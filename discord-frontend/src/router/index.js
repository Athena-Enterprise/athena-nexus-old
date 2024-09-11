import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from '../views/LoginScreen.vue';
import UserDashboard from '../views/UserDashboard.vue';
import CreateBot from '../views/CreateBot.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'login', component: LoginScreen },
  { path: '/dashboard', name: 'user-dashboard', component: UserDashboard },
  { path: '/create-bot', name: 'create-bot', component: CreateBot },
  { path: '/admin-dashboard', name: 'admin-dashboard', component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
