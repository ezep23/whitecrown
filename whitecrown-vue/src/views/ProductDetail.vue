<template>
    <div>
        <Header />
        <div>
            <div v-if="selectedProduct">
                <h2>{{ selectedProduct.name }}</h2>
                <p>ID: {{ selectedProduct.id }}</p>
                <p>Descripción: {{ selectedProduct.description }}</p>
            </div>
        </div>
        <Footer />
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'; 
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  const route = useRoute(); 
  const selectedProduct = ref(null);
  
  onMounted(() => {
  const productId = parseInt(route.params.id, 10); 
  selectedProduct = products.find((p) => p.id === productId);
});

</script>
  