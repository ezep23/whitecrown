<template>
    <div class="flex flex-col border p-5">
        <ul>
            <li v-for="(product, index) in products">
                    <div class="flex items-center justify-between gap-2 m-6 p-10 border">
                        <img :src="product.image" class="h-20 w-20">
                        <div>
                            <p class="text-xl font-bold">{{ product.name }}</p>
                            <span>Descripción</span>
                            <p>${{ product.price }}</p>
                        </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import products from '../data/products.json';
</script>