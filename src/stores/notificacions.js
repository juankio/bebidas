import { ref,reactive, watch} from 'vue'
import {defineStore} from 'pinia'

export const useNotificacionStore= defineStore('notificacion', () => {

    const text =ref('')
    const error=ref(false)
    const mostrar=ref(false)
    watch(mostrar,()=>{
        if(mostrar.value){
            setTimeout(() => {
                text.value=''
                error.value= false
                mostrar.value=false
            }, 3000);
        }
    })
    // function $reset(){
    //     text.value=''
    //     error.value= false
    //     mostrar.value=false
    // }

    return{
    text,
    error,
    mostrar,
    }
})