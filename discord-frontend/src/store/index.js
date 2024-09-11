import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    authenticated: false,
    role: null,
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
      state.authenticated = true;
      state.role = userData.role;
    },
    SET_AUTHENTICATED(state, status) {
      state.authenticated = status;
    },
    LOGOUT_USER(state) {
      state.user = null;
      state.authenticated = false;
      state.role = null;
      localStorage.removeItem('user');
      localStorage.removeItem('userRole');
    },
  },
  actions: {
    loginUser({ commit }, userData) {
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('userRole', userData.role);
      commit('SET_USER', userData);
    },
    logoutUser({ commit }) {
      commit('LOGOUT_USER');
    },
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    isAdmin: state => state.role === 'admin',
  },
});
