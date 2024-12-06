<template>
    <div class="flex items-center justify-around p-6 bg-black">
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
              <router-link to="/checkout" class="hover:text-gray-300">Checkout</router-link>
            </li>
          </ul>
        </div>
  
        <!-- Carrito y Usuario -->
        <div class="flex p-6 space-x-4">
          <!-- Carrito -->
          <div class="text-white">
            <p>Carrito: {{ userStore.isAuthenticated ? cartStore.totalItems : 0 }}</p>
          </div>
          
          <!-- Usuario -->
          <div class="text-white">
            <p v-if="userStore.isAuthenticated">
              Bienvenido, {{ userStore.user.username }}!
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

  