<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <Encuesta />
  </div>
</template>

<script>
  import Encuesta from '../components/datos-basicos/Encuesta.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      Encuesta,
      Nav,
    },
  }
</script>
