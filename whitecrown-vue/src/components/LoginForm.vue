<template>
    <div class="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block font-medium">Usuario</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block font-medium">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Iniciar Sesión</button>
        <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
      </form>
    </div>
</template>
  
<script>
  import { useUserStore } from '../store/user';
  
  export default {
    setup() {
      const userStore = useUserStore();
      const username = ref('');
      const password = ref('');
      const errorMessage = ref('');
  
      const handleLogin = async () => {
        try {
          const success = await userStore.login(username.value, password.value);
          if (success) {
            router.push('/profile'); 
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
  