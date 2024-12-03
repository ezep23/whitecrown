<template>
    <p>{{ counter }}</p>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
  </template>
  
<script setup>
    import {ref} from 'vue';
  
    const counter = ref(0);
    const increment = () => {
      counter.value++
    }
  
    const decrement = () => {
      counter.value--
    }
</script>
  
<style scoped>
    p {
      color: grey;
    }
</style>
