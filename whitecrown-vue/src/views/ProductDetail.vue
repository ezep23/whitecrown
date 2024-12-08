<template>
    <div>
        <Header />
        <div class="flex items-center justify-center mx-auto mt-6">
            <div 
                class="flex border p-10 m-5"
                v-if="selectedProduct">
                <div class="flex flex-col border p-10">
                    <img :src="selectedProduct.image">
                </div>
                <div class="flex flex-col gap-2 border p-10">                
                    <h2 class="text-2xl font-bold">{{ selectedProduct.name }}</h2>
                    <div class="my-2">
                        <span>{{ selectedProduct.description }}</span>
                        <p class="font-bold">${{ selectedProduct.price }}</p>
                    </div>
                    <button
                        class="bg-black text-white p-2 mt-2 rounded-full font-bold text-lg hover:transition 0.8s ease-in hover:text-black border-black hover:bg-white">
                    COMPRAR</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import products from '../data/products.json' 
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  const route = useRoute();
  const selectedProduct = ref(null); 
  
  onMounted(() => {
  const productId = parseInt(route.params.id, 10); 
  let coincidence = products.find((p) => p.id == productId);
  selectedProduct.value = coincidence;
});

</script>
  