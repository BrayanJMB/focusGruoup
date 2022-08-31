<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <Home />
  </div>
</template>

<script>
  import Home from '../components/Home'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      Home,
      Nav,
    },
  }
</script>
