<template>
<div>
    <v-main>
    <VerifyEmail />
  </v-main>
  </div>
</template>

<script>
  import VerifyEmail from '../../components/login/VerifyEmail.vue'

  export default {
    name: 'login',

    components: {
      VerifyEmail,
    },
  }
</script>
