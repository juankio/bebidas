<template>
   <h1 class="text-6xl font-extrabold"> Recetas</h1>
   <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
      <Receta
      v-for="receta in bebida.recetas" 
      :key="receta.idDrink"
      :receta="receta"
      />
   </div>


</template>

<script setup>
  import Receta from '@/components/Receta.vue';
  import {useBebidasStore} from '../stores/bebidas'

  const bebida= useBebidasStore()

</script>

<style lang="scss" scoped>

</style>