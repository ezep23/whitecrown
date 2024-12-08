<template>
    <div class="max-w-lg mx-auto mt-10 p-4 border rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Finalizar Pedido</h2>
      <p class="mb-4">Total a pagar: ${{ cartStore.totalPrice }}</p>
      <form @submit.prevent="handleCheckout">
        <div class="mb-4">
          <label for="card" class="block font-medium">Número de tarjeta</label>
          <input
            v-model="cardNumber"
            type="text"
            id="card"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <button class="bg-green-500 text-white py-2 px-4 rounded" type="submit">Pagar</button>
      </form>
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
    </div>
</template>
  
<script>
  import { useCartStore } from '../store/cart';
  
  export default {
    setup() {
      const cartStore = useCartStore();
      const cardNumber = ref('');
      const message = ref('');
  
      const handleCheckout = () => {
        if (cardNumber.value.length === 16) {
          cartStore.cart = []; 
          message.value = 'Pago realizado con éxito';
        } else {
          message.value = 'Número de tarjeta inválido';
        }
      };
  
      return { cartStore, cardNumber, message, handleCheckout };
    },
  };
</script>
  