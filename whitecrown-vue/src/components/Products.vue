<template>
    <div>
        <div class="m-4 mx-[8%]">
            <h3 class="text-center text-5xl font-bold mt-6">PRODUCTOS</h3>
            <ul class="grid grid-cols-3 m-4">
                <li v-for="(product, index) in products" :key="product.id">
                    <div class="flex flex-col gap-2 m-6 p-10 border">
                        <img :src="product.image">
                        <p class="text-xl font-bold">{{ product.name }}</p>
                        <div>
                            <span>Descripción</span>
                            <p>${{ product.price }}</p>
                        </div>
                        <button 
                            class="bg-black text-white p-2 mt-2 rounded-full font-bold text-lg hover:transition 0.8s ease-in hover:text-black border hover:bg-white"
                            @click="viewProduct(product.id)">
                        COMPRAR
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import arrayProducts from '../data/products.json';

    const products = ref(arrayProducts);

    const router = useRouter();

    const viewProduct = (id) => {
        router.push(`/product/${id}`);
    };
</script>