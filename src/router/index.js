import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Historia from '../views/Historia.vue'
import Pasteles from '../views/Pasteles.vue'
import Pedidos from '../views/Pedidos.vue'
import Contacto from '../views/Contacto.vue'
import Pastelero from '../views/Pastelero.vue'


const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/historia',
    name: 'historia',
    component: Historia
  },
  {
    path: '/pasteles',
    name: 'pasteles',
    component: Pasteles
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: Pastelero
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
