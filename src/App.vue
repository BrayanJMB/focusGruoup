<template>
  <v-app>
    <!-- <v-main>
    <Nav />
  </v-main> -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import Nav from "./components/Navegacion.vue";

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    registro(){
      this.$router.push('/registrar')
    },
  },
  components: {
      Nav,
    },
};
</script>
