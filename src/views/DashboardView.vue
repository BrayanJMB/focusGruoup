<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <!-- <Genero /> -->
  </div>
</template>

<script>
  // import Genero from '../components/datos-basicos/Genero.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'dashboard',

    components: {
      // Genero,
      Nav,
    },
  }
</script>
