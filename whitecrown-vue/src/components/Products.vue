<template>
    <div>
        <div class="m-6 mx-[8%]">
            <ul class="grid grid-cols-3 m-4">
            <li v-for="(product, index) in products" :key="product.id">
                <div class="m-6 p-10 border">
                    <img>
                    <p>{{ product.name }}</p>
                    <span>Descripción</span>
                    <p>{{ product.price }}</p>
                    <button 
                        class="bg-black text-white p-2 mt-2 rounded-full"
                        @click="viewProduct(product.id)">
                    Ver más
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