import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import ProductList from '../views/ProductList.vue';
import Cart from '../views/Cart.vue';
import LoginForm from '../components/LoginForm.vue';
import CheckoutForm from '../components/CheckoutForm.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginForm },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: CheckoutForm },
  { path: '/products', component: ProductList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
