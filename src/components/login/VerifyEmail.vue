<template>
  <v-container>
    <span>verify</span>
  </v-container>
</template>

<script>
  export default {
    name: 'verifyEmail',

    data: () => ({

    }),
    created() {
  
  if (this.$route.params.token) {
    const token = this.$route.params.token;
    console.log(token)

    alert("correo verificado con exito");
    this.$router.push('/')
  }

  
 
},
    methods:{


    },
  }
</script>
