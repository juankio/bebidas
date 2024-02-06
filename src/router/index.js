import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue';
import FavoritosView from '../views/FavoritosView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'inicio',
      component:InicioView
    },
    {
      path:'/favoritos',
      name:'favoritos',
      component:FavoritosView
    },
  ]
})

export default router
