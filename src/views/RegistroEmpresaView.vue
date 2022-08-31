<template>
  <div>
    <v-main>
      <Nav/> </v-main>
    <RegistroEmpresa />
  </div>
</template>

<script>
import RegistroEmpresa from "../components/RegistroEmpresa.vue";
import Nav from "../components/Navegacion.vue";

export default {
  name: "registroEmpresa",

  components: {
    RegistroEmpresa,
    Nav,
  },
};
</script>