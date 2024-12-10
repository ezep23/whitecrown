<template>
    <div class="flex items-center justify-around p-4 bg-black">
        <!-- Logo -->
        <img src="../assets/icon.svg" alt="icon" class="h-20 m-6" />
        
        <!-- Navegación -->
        <div class="p-6">
          <ul class="flex space-x-6 text-white">
            <li>
              <router-link to="/products" class="hover:text-gray-300">Productos</router-link>
            </li>
            <li>
              <router-link to="/cart" class="hover:text-gray-300">Carrito</router-link>
            </li>
            <li>
              <router-link to="/cart" class="hover:text-gray-300">Checkout</router-link>
            </li>
          </ul>
        </div>
  
        <!-- Carrito y Usuario -->
        <div class="flex p-6 space-x-4">
          <!-- Carrito -->
          <div class="text-white">
            <router-link to="/cart" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
              <p>{{ userStore.isAuthenticated ? cartStore.totalItems : 0 }}</p>
            </router-link>
          </div>
          
          <!-- Usuario -->
          <div class="text-white">
            <p class="flex" v-if="userStore.isAuthenticated">
              <router-link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
              </router-link>
              <button 
                @click="userStore.logout" 
                class="text-red-500 ml-2 hover:underline"
              >
                Cerrar sesión
              </button>
            </p>
            <router-link v-else to="/login" class="text-white-500 hover:text-gray-300">
              Iniciar Sesión
            </router-link>
          </div>
        </div>
    </div>
</template>
  
<script>
  import { useUserStore } from '../store/user';
  import { useCartStore } from '../store/cart';
  
  export default {
    setup() {
      const userStore = useUserStore();
      const cartStore = useCartStore();
      return { userStore, cartStore };
    },
  };
</script>

  