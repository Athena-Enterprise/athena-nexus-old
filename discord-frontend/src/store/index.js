// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    authenticated: false,
    user: null,
    bots: [], // Store user's bots
    superAdmin: false, // Flag to check if user is super admin
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    isSuperAdmin: state => state.superAdmin,
  },
  mutations: {
    SET_AUTHENTICATED(state, status) {
      state.authenticated = status;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_BOTS(state, bots) {
      state.bots = bots;
    },
    SET_SUPER_ADMIN(state, isAdmin) {
      state.superAdmin = isAdmin;
    },
  },
  actions: {
    authenticateUser({ commit }, { user, isAuthenticated, isAdmin }) {
      commit('SET_USER', user);
      commit('SET_AUTHENTICATED', isAuthenticated);
      commit('SET_SUPER_ADMIN', isAdmin); // Set admin status
    },
    setBots({ commit }, bots) {
      commit('SET_BOTS', bots);
    },
  },
});
