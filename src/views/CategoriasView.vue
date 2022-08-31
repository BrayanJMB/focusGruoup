<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <Categoria />
  </div>
</template>

<script>
  import Categoria from '../components/datos-basicos/Categorias.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      Categoria,
      Nav,
    },
  }
</script>
