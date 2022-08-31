<template>
  
  <div>
    <!-- <v-main>
    <Nav />
  </v-main> -->
    <Nofound />
  </div>
</template>

<script>
import Nofound from "../components/NoFound.vue";
import Nav from "../components/Navegacion.vue";

export default {
  name: "Found",

  components: {
    Nofound,
    Nav,
  },
};
</script>
