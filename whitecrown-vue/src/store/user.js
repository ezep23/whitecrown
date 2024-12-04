import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null, 
  }),
  actions: {
    login(username, password) {
      if (username === 'admin' && password === '1234') {
        this.user = { username: 'admin', role: 'admin' }; 
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.user = null;
    },
  },
  getters: {
    isAuthenticated() {
      return this.user !== null;
    },
  },
});
