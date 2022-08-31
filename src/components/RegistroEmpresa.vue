<template>
  <v-container class="py-12" grid-list-md>
    <v-card class="overflow-hidden">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-toolbar flat color="purple" dark>
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="font-weight-light">
            Crear Perfil
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="nit"
                label="Nit"
                type="number"
                required
                :rules="nitEmpresa"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="empresa"
                color=""
                label="Nombre Empresa"
                :rules="nameEmpresa"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Correo"
                type="email"
                v-model="correo"
                :rules="correoEmpresa"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
               <v-text-field
                v-model="direccion"
                label="Dirección"
                required
                :rules="direccionEmpresa"
              ></v-text-field>
             
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
               <v-text-field
                v-model="telefono"
                label="Telefono"
                type="number"
                :messages="'Opcional'"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="celular"
                label="Celular"
                type="number"
                :rules="celularEmpresa"
                required
              ></v-text-field>
             
            </v-col>
             <v-col cols="12" md="4">
             
              <v-text-field
                v-model="contacto"
                label="Nombre Contacto"
                :rules="contactoEmpresa"
                required
              ></v-text-field>
            </v-col>
             
          </v-row>
            <v-row>
              
            <v-col cols="12" md="6">
              <v-select
          v-model="departamento"
          :items="states"
          item-text="nombre"
          item-value="id"
          menu-props="auto"
          label="Departamento"
          hide-details
          single-line
          required
        ></v-select>
            </v-col>
           
            <v-col cols="12" md="6">
             <v-select
          v-model="ciudad"
           :items="states"
          item-text="nombre"
          item-value="id"
          menu-props="auto"
          label="Cuidad"
         hide-details
          single-line
          required
        ></v-select>
            </v-col>
          
          </v-row>
        </v-container>
      <br>
        <v-divider ></v-divider>
        <v-card-actions class="px">
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="save">
            Registrar
          </v-btn>
          <!-- <v-btn color="success" @click="save"> Crear </v-btn> -->
        </v-card-actions>
      </v-form>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Error </v-card-title>

        <v-card-text> {{ mensajeError }}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Aceptar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: null,
    valid: false,
    empresa: "",
    nameEmpresa: [
      (valoringresado) => !!valoringresado || "Nombre Empresa Es Requerido",
      (valoringresado) =>
        (valoringresado && valoringresado.length <= 50) ||
        "Nombre Empresa Debe Ser Menor a 50 characteres",
    ],
    correo: "",
    correoEmpresa: [
      (valoringresado) => !!valoringresado || "Correo Es Requerido",
      (valoringresado) =>
        /.+@.+\..+/.test(valoringresado) || "Correo No Es Valido",
      (valoringresado) =>
        (valoringresado && valoringresado.length <= 50) ||
        "El Correo Debe Ser Menor a 50 characteres",
    ],
    nit: "",
    nitEmpresa: [
      (valoringresado) => !!valoringresado || "Nit Es Requerido",
      (valoringresado) =>
        (valoringresado && valoringresado.length <= 22) ||
        "El Nit Debe Ser Menor a 50 characteres",
    ],
    direccion: "",
    direccionEmpresa: [
      (valoringresado) => !!valoringresado || "Dirección Es Requerido",
      (valoringresado) =>
        (valoringresado && valoringresado.length <= 80) ||
        "Direección Debe Ser Menor a 80 characteres",
    ],
    telefono: "",
    celular: "",
    celularEmpresa: [
      (valoringresado) => !!valoringresado || "Celular Es Requerido",
      (valoringresado) =>
        (valoringresado && valoringresado.length <= 20) ||
        "Direección Debe Ser Menor a 20 characteres",
    ],
    contacto: "",
    contactoEmpresa: [
      (valoringresado) => !!valoringresado || "Contacto Es Requerido",
      (valoringresado) =>
        (valoringresado && valoringresado.length <= 30) ||
        "Contacto Debe Ser Menor a 30 characteres",
    ],
    departamento: "",
    ciudad: "",
    dialog: false,
    mensajeError: null,
    states: [
         { nombre:'Alabama', id:1 },
         { nombre:'1vena', id:2 },
         { nombre:'2vena', id:3 },
         { nombre:'Alabama', id:4 },
         { nombre:'1vena', id:5 },
         { nombre:'2vena', id:6 },
        ],
  }),

  methods: {
    save() {
      var vacios= 0;
      
      for (let i = 0; i < this.$refs.form.$el.length; i++) {
        if(this.$refs.form.$el[i].value ==''){
          vacios++
console.log(this.$refs.form.$el[i])
        }
        

      }

      console.log(vacios)
      if(vacios<=4){
        let dataenvio = {
          nit: this.nit,
          nombre: this.empresa,
          correo: this.correo,
          direccion: this.direccion,
          telefono: this.telefono,
          celular: this.celular,
          contacto: this.contacto,
          departamento: this.departamento,
          ciudad: this.ciudad,
        };
        console.log(dataenvio);
        // this.empresa="";
        // this.correo="";
        // this.contrasena="";
        // this.confirmarContrasena="";
        this.$refs.form.reset();
      }else{
        this.mensajeError = "Los campos estan Vacios";
        this.dialog = true

      }
     
    },
  },
};
</script>