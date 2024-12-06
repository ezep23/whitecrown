import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Profile from '../views/Profile.vue';
import Products from '../views/ProductList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile },
  { path: '/products', component: Products },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
