<template>
  <v-container grid-list-xs  class="d-flex justify-center mb-6 pt-12">
    <v-card class="overflow-hidden " color="grey lighten-4"  elevation="24"
    width="500" height="340"
    >
      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
      <v-toolbar flat dark color="light-blue lighten-2 d-flex justify-center">
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-ligth">
          Ingreso de Usuarios
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
          <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      clearable
      class="blue--text"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
      <v-btn color="blue darken-1" dark @click="login()"> Ingresar</v-btn>
        <v-spacer></v-spacer>
         <Reseteo  />
      </v-card-actions>
       <v-card-actions >
      
        <v-spacer></v-spacer>
        
         <Crear_cuenta />
      </v-card-actions>
    
      </v-form>
    </v-card>
       </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

  import Reseteo from "../../components/login/ResetPass.vue";
  import Crear_cuenta from "../../components/login/CrearCuenta.vue";
export default {
  name: 'Login',
   components: {
      Reseteo,
      Crear_cuenta,
    },
  data() {
    return {
      valid: true,
      absolute: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail invalido',
      ],
      password: "",
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      emailreset:'',
    };
  },
  computed: {
    ...mapGetters("auth", {
      getLoginApiStatus: "getLoginApiStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      actionLoginApi: "loginApi",
    }),
    async login() {
      if(this.$refs.form.validate()){
        console.log(this.email, this.password);
        const payload = {
          email: this.email,
          password: this.password,
        };
        await this.actionLoginApi(payload);
        if (this.getLoginApiStatus == "success") {
          this.$router.push("/dashboard");
        } else {
          alert("failed");
        }
      }
    },
  },
};
</script>
