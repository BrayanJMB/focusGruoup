<template>
  <div>
    <v-row
      justify="center"
    >
    <a class="text-decoration-none ma-3 pb-9" @click="mostrarReset"
        >Crear Cuenta
        <v-btn color="success" fab dark small>
          <v-icon dark> mdi-plus </v-icon>
        </v-btn></a
      >
      <!-- <v-btn
        color="primary"
        class="ma-2"
        dark
        @click="dialog = true"
      >
        Open Dialog 1
      </v-btn> -->
   


   
      <v-dialog
        v-model="dialog"
        persistent
        max-width="500px"
      >
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
        <v-card>
          <v-card-title class="light-blue lighten-2 d-flex" >
               <v-icon dark>mdi-account</v-icon>
              <span class="white--text justify-center">Crear Cuenta</span>
              <v-spacer></v-spacer>
            <v-spacer></v-spacer>
             <v-btn
                  fab
                  small
                  color="error"
                  @click="mostrarReset"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
          
          </v-card-title>
           <v-card-text>
            
          <v-text-field
      v-model="emailreset"
      :rules="emailRules"
      label="E-mail"
      required
      clearable
      
      class="blue--text"
    ></v-text-field>
      </v-card-text>
          <v-card-actions>
            <v-btn color="success" class="white--text" @click="Crear()">Crear</v-btn>
          </v-card-actions>
        </v-card>
        </v-form>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        valid: true,
        dialog: false,
        emailreset:'',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail invalido',
      ],
      }
    },
    methods:{
        Crear(){
            this.$refs.form.validate()
            if (this.$refs.form.validate()) {
              
                
            }
        },
        mostrarReset(){
            
            this.dialog = !this.dialog;
            this.$refs.form.reset();
            

        },
    },
  }
</script>