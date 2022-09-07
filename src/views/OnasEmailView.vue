<template>
<div>
    <v-main>
    <Nav />
  </v-main>
  <OnasEmail />
  </div>
</template>

<script>
  import OnasEmail from '../components/onas/OnasEmail.vue'
  import Nav from "../components/Navegacion.vue";

  export default {
    name: 'home',

    components: {
      OnasEmail,
      Nav,
    },
  }
</script>
