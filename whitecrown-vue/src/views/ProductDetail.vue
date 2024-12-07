<template>
    <div>
        <Header />
        <div class="flex items-center justify-center mx-auto mt-6">
            <div 
                class="flex border p-10 m-5"
                v-if="selectedProduct">
                <div class="flex flex-col border p-10">
                    <img >
                    asd
                </div>
                <div class="flex flex-col border p-10">                
                    <h2>{{ selectedProduct.name }}</h2>
                    <span>{{ selectedProduct.description }}</span>
                    <p>PRECIO: ${{ selectedProduct.price }}</p>
                    <button
                        class="rounded-full bg-black text-white p-4"
                    >
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
  