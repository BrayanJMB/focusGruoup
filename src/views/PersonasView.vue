<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <Personas />
  </div>
</template>

<script>
  import Personas from '../components/datos-basicos/Personas.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      Personas,
      Nav,
    },
  }
</script>
