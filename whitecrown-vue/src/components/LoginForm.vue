<template>
    <div class="flex flex-col max-w-md mx-auto mt-[5%] bg-black p-10 border rounded shadow-lg">
      <img src="../assets/icon.svg" alt="icon" class="h-20 m-6" />
      <h2 class="text-3xl font-bold mb-6 text-center text-white">INICIAR SESIÓN</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block font-medium text-white">Usuario</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block font-medium text-white">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <div class="mt-6">
          <button class="bg-white text-black py-2 px-4 rounded" type="submit">Iniciar Sesión</button>
          <router-link to="/login" class="text-gray-300 mx-4">¿No estas registrado?</router-link>
        </div>
        <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
      </form>
    </div>
</template>
  
<script>
  import { useUserStore } from '../store/user';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const userStore = useUserStore();
      const username = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const router = useRouter();
  
      const handleLogin = async () => {
        try {
          const success = await userStore.login(username.value, password.value);
          if (success) {
            router.push('/products'); 
          } else {
            errorMessage.value = 'Credenciales incorrectas';
          }
        } catch (error) {
          errorMessage.value = 'Error durante el inicio de sesión';
          console.error(error);
          }
        };
  
      return { username, password, errorMessage, handleLogin };
    },
  };
</script>