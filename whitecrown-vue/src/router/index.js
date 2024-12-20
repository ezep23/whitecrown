import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Cart from '../views/Cart.vue';
import Profile from '../views/Profile.vue';
import SignUp from '../views/SignUp.vue';
import LogIn from '../views/LogIn.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product/:id', component: ProductDetail },
  { path: '/login', component: LogIn },
  { path: '/signup', component: SignUp},
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
