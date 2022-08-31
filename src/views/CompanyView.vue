<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <Company />
  </div>
</template>

<script>
  import Company from '../components/datos-basicos/Company.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      Company,
      Nav,
    },
  }
</script>
