<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="8">
        <v-card class="overflow-hidden" elevation="12">
          <v-card class="d-flex justify-center mb-6" flat tile
            ><h2 class="font-weight-light">Datos Basicos</h2></v-card
          >

          <v-card-text>
            <div class="text-overline mb-4">
              <v-icon color="cyan">mdi-format-align-bottom</v-icon> Información
              General Requerida
            </div>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="encuesta.title"
                :rules="titleRules"
                label="Title"
                required
              ></v-text-field>

              <v-select
                v-model="encuesta.lenguaje"
                :items="items"
                :rules="[(v) => !!v || 'Lenguaje is required']"
                label="Lenguaje"
                required
              ></v-select>
              <v-select
                class="mt-6 mb-0"
                v-model="encuesta.nameModerador"
                :items="itemsModerador"
                item-value="id"
                item-text="NameModerador"
                dense
                hide-details
                label="Nombre del Moderador"
                :rules="ModeradorRules"
                required
                append-icon="mdi-plus"
                color="success"
                @change="cargarVista(encuesta.nameModerador)"
                @click:append="habilitarModerador()"
                single-line
              ></v-select>
              <!-- <v-text-field
                hide-details
                v-model="encuesta.nameModerador"
                :rules="titleRules"
                required
                append-icon="mdi-magnify"
                label="Nombre del Moderador"
                single-line
                @click:append="buscarModerador()"
              ></v-text-field> -->

              <v-col cols="auto">
                <v-dialog
                  transition="dialog-top-transition"
                  max-width="600"
                  persistent
                  v-model="dialog"
                >
                  <template>
                    <v-card>
                      <v-form
                        ref="formModerador"
                        v-model="validModerador"
                        lazy-validation
                      >
                        <v-toolbar color="primary" dark
                          >Buscar Moderador</v-toolbar
                        >
                        <v-spacer></v-spacer>
                        <v-card-text>
                          <v-text-field
                            v-model="moderador.moderadorNuevo"
                            :rules="titleRules"
                            required
                            label="Nombre del Moderador"
                          ></v-text-field>
                          <v-spacer></v-spacer>
                          <v-file-input
                            accept="image/*"
                            v-model="moderador.img_moderador"
                            prepend-icon="mdi-camera"
                            label="Imagen del Moderador "
                            @change="cargarimg('1', moderador.img_moderador)"
                            @click:clear="clearfile('1')"
                          ></v-file-input>
                          <!-- <v-autocomplete
                          class="mt-6 mb-0"
                          v-model="moderadorBuscado"
                          :items="itemsModerador"
                          dense
                          filled
                          label="Seleccionar Moderador"
                          @change="moderadorSeleccionado()"
                        ></v-autocomplete> -->
                          <v-avatar size="100px" v-show="avatar">
                            <img :src="img_moderador"
                          /></v-avatar>

                          <v-textarea
                            label="Descripción Moderador"
                            class="mx-2"
                            rows="2"
                            :rules="descripcionRules"
                            v-model="moderador.descripcionModerador"
                          ></v-textarea>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn text color="success" @click="crearModerador()"
                            >Crear Moderador</v-btn
                          >
                          <v-spacer></v-spacer>
                          <v-btn text color="error" @click="cerrarModerador()"
                            >Cancelar</v-btn
                          >
                        </v-card-actions>
                      </v-form>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>

              <v-spacer></v-spacer>

              <div class="text-overline mb-4">
                <v-icon color="cyan">mdi-account-edit</v-icon> Personalizar
                (Opcional)
              </div>

              <v-file-input
                accept="image/*"
                prepend-icon="mdi-camera"
                v-model="encuesta.img_ilustracion"
                label="Imagen de Ilustración"
                @change="cargarimg('2', encuesta.img_ilustracion)"
                @click:clear="clearfile('2')"
              ></v-file-input>
              <v-textarea
                label="Descripción"
                auto-grow
                v-model="encuesta.descripcion"
                rows="3"
                :rules="descripcionRules"
              ></v-textarea>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                block
                @click="validate"
              >
                Validate
              </v-btn>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="d-flex justify-center mb-6" color="transparent" flat tile
          ><h2 class="font-weight-light">Vista Previa</h2></v-card
        >
        <template>
          <v-card class="mx-auto my-3 justify-end" max-width="300">
            <v-avatar
              v-if="!img_ilustracion"
              class="justify-center"
              size="250"
              tile
              left
              v-text="
                encuesta.title.slice(0, 1).toUpperCase() +
                encuesta.title.slice(1, 1).toUpperCase()
              "
            ></v-avatar>
            <v-img
              height="250"
              :src="img_ilustracion"
              v-if="img_ilustracion"
            ></v-img>

            <v-card-title>{{ encuesta.title }}</v-card-title>

            <v-card-text>
              <div class="my-4 text-subtitle-1">{{ encuesta.lenguaje }}</div>

              <div>
                {{ encuesta.descripcion }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title
              ><v-avatar size="36px" v-show="avatarIlustracion">
                <img :src="ilustracion.avatar" /></v-avatar
              >{{ ilustracion.nameIlustracion }}</v-card-title
            >
          </v-card>
        </template></v-col
      ></v-row
    ></v-container
  >
</template>
      </v-col>
      </v-row>
      </v-container>
</template>

<script>
import axios from "axios";

var url = "https://dynamicliveconversationapi.azurewebsites.net/";

export default {
  data: () => ({
    valid: true,
    validModerador: true,
    titleRules: [
      (v) => !!v || "Campo is required",
      (v) => (v && v.length <= 40) || "Campo must be less than 10 characters",
    ],
    moderadorRules: [(v) => !!v || "Campo is required"],
    descripcionRules: [
      (v) => !!v || "Campo is required",
      (v) => (v && v.length <= 100) || "Campo must be less than 100 characters",
    ],

    items: ["Español", "Ingles"],
    encuesta: {
      title: "",
      lenguaje: "",
      nameModerador: "",
      img_moderador: "",
      img_ilustracion: "",
      descripcion: "",
    },
    img_moderador: "",
    img_ilustracion: "",
    avatar: false,
    dialog: false,
    itemsModerador: [],
    moderador: {
      moderadorNuevo: "",
      img_moderador: "",
      avatar: "",
      descripcionModerador: "",
    },
    ilustracion: {
      nameIlustracion: "",
      avatar: "",
    },
    avatarIlustracion: false,
    base64String: "",
  }),
  created() {
    this.cargarModeradores();
  },
  methods: {
    cargarModeradores() {
      axios
        .get(url + "api/Moderador")
        .then((response) => {
          this.itemsModerador = response.data;
          console.log(response.data);
        })
        .catch((e) => {});
    },
    cargarimg(indicador, file) {
      switch (indicador) {
        case "1":
          this.img_moderador = URL.createObjectURL(file);
          const reader = new FileReader();
          reader.onload = () =>{
            var base64String = reader.result
              .replace("data:", "")
              .replace(/^.+,/, "");
              console.log("onload: " +base64String)
          };
          reader.readAsDataURL(file);
          this.moderador.avatar = base64String;
          console.log(this.moderador.avatar);
          this.avatar = true;
          break;
        case "2":
          this.img_ilustracion = URL.createObjectURL(file);
          break;
      }
    },
    clearfile(indicador) {
      switch (indicador) {
        case "1":
          this.img_moderador = "";
          this.avatar = false;
          break;
        case "2":
          this.img_ilustracion = "";
          break;
      }
    },
    habilitarModerador() {
      this.dialog = true;
    },
    crearModerador() {
      console.log(this.moderador);
    },
    cargarVista(idModerador) {
      axios
        .get(url + "api/Moderador/", { idModerador })
        .then((response) => {
          this.ilustracion.nameIlustracion = response.data[0].NameModerador;
          this.avatarIlustracion = true;
          this.ilustracion.avatar = response.data[0].Icono;
        })
        .catch((e) => {
          alert(e.message);
        });
    },
    cerrarModerador() {
      this.dialog = false;
      this.$refs.formModerador.resetValidation();
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>