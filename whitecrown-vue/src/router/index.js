import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Cart from '../views/Cart.vue';
import LoginForm from '../components/LoginForm.vue';
import CheckoutForm from '../components/CheckoutForm.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginForm },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: CheckoutForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
