import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue'; // Landing page component
import UserLogin from '../views/UserLogin.vue';
import UserDashboard from '../views/UserDashboard.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

// Mock authentication status (you'll replace this with real logic)
const isAuthenticated = () => !!localStorage.getItem('user'); // Check if user is logged in
const isAdmin = () => localStorage.getItem('userRole') === 'admin'; // Check if user is an admin

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage, // The landing page will be the default route
  },
  {
    path: '/login',
    name: 'user-login',
    component: UserLogin,
  },
  {
    path: '/user-dashboard',
    name: 'user-dashboard',
    component: UserDashboard,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next({ name: 'user-login' }); // Redirect to login if not authenticated
      } else {
        next(); // Allow access if logged in
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
        next(); // Allow access if authenticated and admin
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Global navigation guard to redirect authenticated users
router.beforeEach((to, from, next) => {
  if (isAuthenticated() && to.name === 'landing-page') {
    // If user is logged in and tries to access the landing page, redirect to the appropriate dashboard
    if (isAdmin()) {
      next({ name: 'admin-dashboard' });
    } else {
      next({ name: 'user-dashboard' });
    }
  } else {
    next(); // Proceed as normal if no redirection is required
  }
});

export default router;
