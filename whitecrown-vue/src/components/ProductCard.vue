<template>
    <div class="border p-4 rounded-lg shadow-md">
      <img :src="product.image" alt="product.name" class="w-full h-40 object-cover" />
      <h3 class="font-bold text-lg">{{ product.name }}</h3>
      <p class="text-gray-500">${{ product.price }}</p>
      <button 
        class="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        @click="$emit('addToCart', product)">
        Añadir al carrito
      </button>
    </div>
</template>
  
<script>
  export default { 
    props: { product: Object, },
  };
</script>
  