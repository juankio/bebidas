 import { ref, onMounted,watch, computed } from 'vue'
import {defineStore} from 'pinia'
import {useBebidasStore} from './bebidas'
import {useModalStore} from './modal'
import {useNotificacionStore} from './notificacions'


export const useFavoritoStore= defineStore('favoritos', () => {
    const bebidas= useBebidasStore()
    const modal= useModalStore()
    const notificacion= useNotificacionStore()
    const favoritos= ref([])

    onMounted(()=>{
        favoritos.value=JSON.parse(localStorage.getItem('favoritos'))??[]
    })
    watch(favoritos,()=>{
        sincronizarLocalStorage()
    },{
        deep:true
    })

    function sincronizarLocalStorage ()  {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    function existeFavorito(id) {
        const favoritosLocalStorage =JSON.parse(localStorage.getItem('favoritos'))??[]
        return favoritosLocalStorage.some(favoritos => favoritos.idDrink=== id)
    }
    function eliminarFavorito (){
        favoritos.value=favoritos.value.filter(favorito=> favorito.idDrink !== bebidas.receta.idDrink)
        
        notificacion.mostrar =  true
        notificacion.text= 'Se elimino de favoritos'
        
    }
    function agregarFavorito (){
        favoritos.value.push(bebidas.receta)
        notificacion.mostrar =  true
        notificacion.text= 'Se agrego a favoritos'
        
    }

    function handleClickFavoritos (e) {
        if(existeFavorito(bebidas.receta.idDrink)){
            eliminarFavorito()
            // e.target.textContent='Agregar a Favoritos'
        }else{
            agregarFavorito()
            // e.target.textContent='Eliminar a Favoritos'
        }
        modal.modal=false
        
    }
    const noFavorito= computed(()=>favoritos.value.length===0)

    return{
        favoritos,
        handleClickFavoritos,
        existeFavorito,
        noFavorito
    }
})