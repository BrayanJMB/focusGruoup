import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "No Found" */ '../views/NoFoundView.vue')
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: () => import(/* webpackChunkName: "Registro Empresa" */ '../views/RegistroEmpresaView.vue')
  },
  {
    path: '/datos-basicos/personas',
    name: 'Personas',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/PersonasView.vue')
  },
  {
    path: '/datos-basicos/genero',
    name: 'Genero',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/GeneroView.vue')
  },
  {
    path: '/encuesta/creacion-encuesta',
    name: 'Creacion Encuesta',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/encuestras-views/Creacion-EncuestaWiew')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
