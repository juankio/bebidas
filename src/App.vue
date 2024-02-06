

<template>
<Header/>
<main class="container mx-auto mt-10">
  <RouterView/>
</main>

<Modal/>
<Notificacion/>
</template>

<script setup>
import {RouterView} from 'vue-router';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';
import Notificacion from './components/Notificacion.vue';
</script>
<style scoped>

</style>
