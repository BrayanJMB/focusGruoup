<template>
  <div>
    <v-row justify="center">
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

      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card>
            <v-card-title class="light-blue lighten-2 d-flex">
              <v-icon dark>mdi-account</v-icon>
              <span class="white--text justify-center">Crear Cuenta</span>
              <v-spacer></v-spacer>
              <v-btn fab small color="error" @click="mostrarReset">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="empresa.nit"
                      label="Nit"
                      type="number"
                      required
                      :rules="nitEmpresa"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="empresa.name"
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
                      v-model="empresa.correo"
                      :rules="correoEmpresa"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="empresa.direccion"
                      label="Dirección"
                      required
                      :rules="direccionEmpresa"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="empresa.telefono"
                      label="Telefono"
                      type="number"
                      :messages="'Opcional'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="empresa.celular"
                      label="Celular"
                      type="number"
                      :rules="celularEmpresa"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="empresa.contacto"
                      label="Nombre Contacto"
                      :rules="contactoEmpresa"
                      required
                      
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="empresa.departamento"
                      :items="departamentos"
                      item-text="departmentName"
                      item-value="departmentCode"
                      menu-props="auto"
                      label="Departamento"
                      :rules="departamentoEmpresa"
                      hide-details
                      single-line
                      required
                      @change="cargarCity()"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-select
                      v-model="empresa.ciudad"
                      :items="ciudades"
                      item-text="cityName"
                      item-value="cityCode"
                      menu-props="auto"
                      label="Cuidad"
                      :rules="cuidadEmpresa"
                      hide-details
                      single-line
                      required
                      
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="save"
              >
                Registrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

var url = "https://dynamicliveconversationapi.azurewebsites.net/";
export default {
  data() {
    return {
      valid: true,
      dialog: false,
      empresa: {
        name: "enbo",
        correo: "enbo98@hotmail.com",
        nit: "1",
        direccion: "manzana d casa ",
        telefono: "12",
        celular: "3219316862",
        contacto: "enbo",
        departamento: "",
        ciudad: "",
      },

      nameEmpresa: [
        (valoringresado) => !!valoringresado || "Nombre Empresa Es Requerido",
        (valoringresado) =>
          (valoringresado && valoringresado.length <= 50) ||
          "Nombre Empresa Debe Ser Menor a 50 characteres",
      ],

      correoEmpresa: [
        (valoringresado) => !!valoringresado || "Correo Es Requerido",
        (valoringresado) =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            valoringresado
          ) || "Correo No Es Valido",
        (valoringresado) =>
          (valoringresado && valoringresado.length <= 50) ||
          "El Correo Debe Ser Menor a 50 characteres",
      ],

      nitEmpresa: [
        (valoringresado) => !!valoringresado || "Nit Es Requerido",
        (valoringresado) =>
          (valoringresado && valoringresado.length <= 22) ||
          "El Nit Debe Ser Menor a 50 characteres",
      ],

      direccionEmpresa: [
        (valoringresado) => !!valoringresado || "Dirección Es Requerido",
        (valoringresado) =>
          (valoringresado && valoringresado.length <= 80) ||
          "Direección Debe Ser Menor a 80 characteres",
      ],

      celularEmpresa: [
        (valoringresado) => !!valoringresado || "Celular Es Requerido",
        (valoringresado) =>
          (valoringresado && valoringresado.length <= 20) ||
          "Direección Debe Ser Menor a 20 characteres",
      ],

      contactoEmpresa: [
        (valoringresado) => !!valoringresado || "Contacto Es Requerido",
        (valoringresado) =>
          (valoringresado && valoringresado.length <= 30) ||
          "Contacto Debe Ser Menor a 30 characteres",
      ],
      departamentoEmpresa: [
        (valoringresado) => !!valoringresado || "Departamento Es Requerido",
      ],
      cuidadEmpresa: [
        (valoringresado) => !!valoringresado || "Cuidad Es Requerido",
      ],
      dialog: false,
      mensajeError: null,
      departamentos: [
        // { nombre: "Alabama", id: 1 },
        // { nombre: "1vena", id: 2 },
        // { nombre: "2vena", id: 3 },
        // { nombre: "Alabama", id: 4 },
        // { nombre: "1vena", id: 5 },
        // { nombre: "2vena", id: 6 },
      ],
      ciudades:[],

    };
  },
    created() {
    this.cargarDepartamento();
    },
  methods: {
     cargarDepartamento() {
      axios
        .get(url + "api/departamentos")
        .then((response) => {
          this.departamentos = response.data;
          console.log(response.data);
          console.log(this.departamentos);
        })
        .catch((e) => {
          console.log(e)
        });
    },
    cargarCity() {
      axios
        .get(url + "api/ciudades/",{IdDepartment:this.empresa.departamento})
        .then((response) => {
          this.ciudades = response.data;
          console.log(response.data);
          console.log(this.ciudades);
        })
        .catch((e) => {
          console.log(e)
        });
    
      // axios
      //   .get(url + "api/ciudades")
      //   .then((response) => {
      //     cuidades = response.data;
      //     console.log(response.data);
      //   })
      //   .catch((e) => {});
    },

    save() {
      if (this.$refs.form.validate()) {
        console.log(this.empresa);
        axios
          .post(url + "api/compañias", this.empresa)
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    mostrarReset() {
      this.dialog = !this.dialog;
      this.$refs.form.reset();
    },
  },
};
</script>
