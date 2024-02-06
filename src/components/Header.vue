<template>
    <header class="bg-slate-800"
    :class="{header:paginaInicio}"
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink
                    :to="{name:'inicio'}"
                    >
                    <img class="w-32" src="/img/logo.svg" alt="logoTipo">
                    </RouterLink>
                </div>
                <nav class="flex gap-4 text-white">
                    <RouterLink
                    :to="{name:'inicio'}"
                    class=" uppercase font-bold"
                    active-class="text-orange-500"
                    >
                    Inicio
                </RouterLink>
                    <RouterLink
                    :to="{name:'favoritos'}"
                    class=" uppercase font-bold"
                    active-class="text-orange-500"
                    >
                    Favoritos
                </RouterLink>
                </nav>
            </div>
            <form 
            v-if="paginaInicio"
            class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            @submit.prevent="handleSumit"
            >
            <div class="space-y-8">
                <label 
                class="block text-white uppercase font-extrabold text-lg"
                for="ingrediente">Nombre o Ingredientes</label>
                <input 
                id="ingrediente"
                v-model="store.busqueda.nombre"
                class="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente: ej. Vodka, Tekila, etc"
                type="text"/>
            </div>
            <div class="space-y-8">
                <label 
                class="block text-white uppercase font-extrabold text-lg"
                for="categoria">Categoria</label>
                <select 
                id="categoria"
                class="p-3 w-full rounded-lg focus:outline-none"
                v-model="store.busqueda.categoria"
                >
                <option value="">--Seleccione--</option>
                <option 
                v-for="categoria in store.categorias "
                :key="categoria.strCategory"
                :value="categoria.strCategory"
                >{{ categoria.strCategory }}</option>
                </select>
            </div>

            <input type="submit"
            class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase "
            value="Buscar recetas"
            />
            </form>
        </div>
    </header>
</template>

<script setup>
import {RouterLink, useRoute} from 'vue-router';
import {computed } from 'vue'
import {useBebidasStore} from '../stores/bebidas'
import {useNotificacionStore} from '../stores/notificacions'


const route =useRoute()
const store = useBebidasStore()
const notificacion = useNotificacionStore()

const paginaInicio = computed(()=> route.name==='inicio')

const handleSumit = ()=>{
   if(Object.values(store.busqueda).includes('')){
    // notificacion.text='Todos los campos son obligatorios'
    // notificacion.mostrar=true
    // notificacion.error=true
    notificacion.$patch({
        text:'Todos los campos son obligatorios',
        mostrar:true,
        error:true
    })
    return
   }

    store.obtenerRecetas()
}


</script>

<style >
.header{
    background-image:url('/img/bg.jpg') ;
    background-size:cover ;
    background-position:center ;
}
</style>