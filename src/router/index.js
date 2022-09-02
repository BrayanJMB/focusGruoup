import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '../views/Login/LoginView'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login,
    meta: { requiredAuth: false }
  },
  // {
  //   path: 'login',
  //   name: 'login',
  //   component: Login,
  //   meta: { requiredAuth: false }
  // },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "No Found" */ '../views/NoFoundView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/verify-email/:token',
    name: 'verify email',
    component: () => import(/* webpackChunkName: "No Found" */ '../views/Login/VerifyEmailView'),
    meta: { requiredAuth: false }
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: () => import(/* webpackChunkName: "Registro Empresa" */ '../views/RegistroEmpresaView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/personas',
    name: 'Personas',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/PersonasView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/genero',
    name: 'Genero',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/GeneroView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/rol',
    name: 'Rol',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/RolView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/company',
    name: 'Compañia',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/CompanyView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/categorias',
    name: 'Compañia',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/CategoriasView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/encuestas',
    name: 'Encuestas',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/EncuestaView.vue'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/seccion-encuesta',
    name: 'SeccionEncuestas',
    component: () => import(/* webpackChunkName: "Registro Personas" */ '../views/SeccionEncuestaView.vue'),
    meta: { requiredAuth: false }
  },

  {
    path: '/encuesta/creacion-encuesta',
    name: 'Creacion Encuesta',
    component: () => import(/* webpackChunkName: "Registro Personas"  */ '../views/encuestras-views/Creacion-EncuestaWiew'),
    meta: { requiredAuth: false }
  },
  {
    path: '/datos-basicos/preguntas',
    name: 'Preguntas',
    component: () => import('../views/Preguntas.vue')
  }
   /*
  {
    path: '/encuesta/creacion-preguntas',
    name: 'Creacion Preguntas',
    component: () => import(/* webpackChunkName: "Registro Personas"  '../views/encuestras-views/Creacion-PreguntasWiew'),
    meta: { requiredAuth: false }
  }
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
/*
router.beforeEach(async (to, from, next) => {
  let userProfile = store.getters["auth/getUserProfile"];
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  if (userProfile.id === 0 && isAuthenticated) {
    await store.dispatch("auth/userProfile");
    userProfile = store.getters["auth/getUserProfile"];
  }

  if (to.meta.requiredAuth) {
    if (userProfile.id === 0) {
      return next({ path: "/" });
    }
  } else {
    if (userProfile.id !== 0) {
      return next({ path: "/dashboard" });
    }
  }
  return next();
});
*/
