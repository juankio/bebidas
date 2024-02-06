import {defineStore} from 'pinia'
import {ref,reactive, onMounted, computed} from 'vue'
import APIService from '../services/APIService'
import {useModalStore} from './modal'


export const useBebidasStore  = defineStore('bebidas', ()=>{

 const modal= useModalStore()
 const categorias = ref([])
 const recetas = ref([])
 const receta = ref({})


const busqueda= reactive({
    nombre:'',
    categorias:''
})



onMounted(async()=>{
    const {data: {drinks}} =await APIService.obterCategoria()
    categorias.value= drinks
    
})

 async function obtenerRecetas(){
    const {data: {drinks}} = await APIService.buscarRecetas(busqueda)
    recetas.value=drinks
    
}
async function seleccionarBebida(id){
    const {data: {drinks}} = await APIService.buscarReceta(id)
    receta.value=drinks[0]
    modal.handleClickModal()

}
const noRecetas= computed(()=> recetas.value.length===0)
 return{
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    seleccionarBebida,
    receta,
    noRecetas
 }
})