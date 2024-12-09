<template>
    <div class="flex items-center max-w-4xl mx-auto mt-[6%] bg-black p-10 gap-20">
        <div>
            <img src="../assets/icon.svg" alt="icon" class="h-40 m-20" />
        </div>
        <div>
            <p class="text-3xl font-bold text-white mb-8">CREAR CUENTA</p>  
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
                <button class="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition 0.5s ease-in border" type="submit">Enviar</button>
                <router-link to="/profile" class="text-white mx-4 hover:underline">¿Ya estas registrado?</router-link>
                </div>
                <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>
  