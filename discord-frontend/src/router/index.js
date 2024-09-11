import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Register from '../views/UserRegister.vue'
import Login from '../views/UserLogin.vue'
import Dashboard from '../views/UserDashboard.vue'
import Admin from '../views/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/userregister',
    name: 'Register',
    component: Register
  },
  {
    path: '/userlogin',
    name: 'Login',
    component: Login
  },
  {
    path: '/userdashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/admindashboard',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true, isAdmin: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user') // You can change this to check actual auth status
  const isAdmin = localStorage.getItem('isAdmin') === 'true'

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'Login' })
    } else if (to.matched.some(record => record.meta.isAdmin) && !isAdmin) {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
