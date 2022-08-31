<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <SeccionEncuesta />
  </div>
</template>

<script>
  import SeccionEncuesta from '../components/datos-basicos/SeccionEncuesta.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      SeccionEncuesta,
      Nav,
    },
  }
</script>
