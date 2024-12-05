<template>
    <header class="bg-black max-h-fit">
        <nav class="flex items-center justify-between p-4">
            <img src="../assets/icon.svg" alt="icon" class="h-8"/>
            <!-- <div>
                <ul class="flex space-x-6 text-white md:flex">
                    <li>
                        <router-link to="/Home">Productos</router-link>
                    </li>
                    <li>
                        <router-link to="/cart">Carrito</router-link>
                    </li>
                    <li>
                        <router-link to="/User">Checkout</router-link>
                    </li>
                </ul>
            </div> -->
            <div class="p-4">
                <p v-if="userStore.isAuthenticated">
                    Bienvenido, {{ userStore.user.username }}!
                    <button @click="userStore.logout" class="text-red-500 ml-2">
                    Cerrar sesión
                    </button>
                </p>
                <!-- <router-link v-else to="/login" class="text-blue-500">
                    Iniciar Sesión
                </router-link> -->
            </div>
            <div>
                <p v-if="userStore.isAuthenticated">Carrito: {{ cartStore.totalItems }}</p>
                <p v-else class="text-white">Carrito: 0</p>
            </div>
        </nav>
    </header>
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
  