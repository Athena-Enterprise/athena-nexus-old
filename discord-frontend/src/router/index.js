import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import UserDashboard from '../views/UserDashboard.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

// Mock authentication status (you'll replace this with real logic)
const isAuthenticated = () => !!localStorage.getItem('user'); // Check if user is logged in
const isAdmin = () => localStorage.getItem('userRole') === 'admin'; // Check if user is an admin

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage,
  },
  {
    path: '/user-dashboard',
    name: 'user-dashboard',
    component: UserDashboard,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next({ name: 'user-login' }); // Redirect to login if not authenticated
      } else {
        next();
      }
    },
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: AdminDashboard,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next({ name: 'user-login' }); // Redirect to login if not authenticated
      } else if (!isAdmin()) {
        next({ name: 'user-dashboard' }); // Redirect to user dashboard if not an admin
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'development' ? '/dev/' : '/'),
  routes,
});

export default router;
