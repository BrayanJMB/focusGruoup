<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <CreacionPreguntas />
  </div>
</template>

<script>
  import CreacionPreguntas from '../../components/encuesta/Creacion-Preguntas.vue'
  import Nav from "../../components/Navegacion.vue";

  export default {
    name: 'creacion-preguntas',

    components: {
      CreacionPreguntas,
      Nav,
    },
  }
</script>
