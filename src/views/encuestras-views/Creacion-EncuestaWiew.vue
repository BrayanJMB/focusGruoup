<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <CreacionEncuesta />
  </div>
</template>

<script>
  import CreacionEncuesta from '../../components/encuesta/Creacion-Encuesta.vue'
  import Nav from "../../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      CreacionEncuesta,
      Nav,
    },
  }
</script>
