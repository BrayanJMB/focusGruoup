<template>
<div>
    <v-main>
    <Login />
  </v-main>
  </div>
</template>

<script>
  import Login from '../../components/login/Login.vue'

  export default {
    name: 'login',

    components: {
      Login,
    },
  }
</script>
