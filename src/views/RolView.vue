<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <Rol />
  </div>
</template>

<script>
  import Rol from '../components/datos-basicos/Rol.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      Rol,
      Nav,
    },
  }
</script>
