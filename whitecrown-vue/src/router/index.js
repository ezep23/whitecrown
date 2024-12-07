import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Cart from '../views/Cart.vue';
import Profile from '../views/Profile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
