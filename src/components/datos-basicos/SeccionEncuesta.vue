<template>
  <div>
    <v-container id="Demografico" fluid tag="section">
   
    </v-container>
    <v-container>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        sort-by="Registros"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Registros Seccion Encuesta</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="700px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="seccionEncuestaItem.id"
                          label="Id Registro"
                          disabled
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                          <v-select
                            v-model="seccionEncuestaItem.IdEncuesta"
                            :items="itemsEncuesta"
                            item-text="Nombre"
                            item-value="id"
                            menu-props="auto"
                            label="Encuesta"
                            hide-details
                            single-line
                            required
                          ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="seccionEncuestaItem.Nombre"
                          label="Nombre"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                          <v-select
                            v-model="seccionEncuestaItem.IdSeccion"
                            :items="itemsCategoria"
                            item-text="Nombreseccion"
                            item-value="id"
                            menu-props="auto"
                            label="Categoria"
                            hide-details
                            single-line
                            required
                          ></v-select>
                        </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Esta reguro que desea eliminar el registro?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >Eliminar</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
       </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

var url = "https://dynamicliveconversationapi.azurewebsites.net/";
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Categoria", value: "IdSeccion" },
      { text: "Encuesta", value: "IdEncuesta" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    seccionEncuestaItem: {
      IdSeccion: "",
      IdEncuesta: "",
    },
    defaultItem: {
      IdSeccion: "",
      IdEncuesta: "",
    },
    itemsCategoria :[],
    itemsEncuesta :[]
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Registro" : "Editar Registro";
    },
  },

  watch: {
    dialog(valorEncuesta) {
      valorEncuesta || this.close();
    },
    dialogDelete(valorEncuesta) {
      valorEncuesta || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.cargarEncuesta();
    this.cargarCategoria();
  },

  methods: {
    initialize() {
      axios
        .get(url + "api/Survey")
        .then((response) => {
          this.desserts = response.data;
        })
        .catch((e) => {
        });
        
    },
    cargarEncuesta() {
      axios
        .get(url + "api/Survey")
        .then((response) => {
          this.itemsEncuesta = response.data;
        })
        .catch((e) => {});
    },
    cargarCategoria() {
      axios
        .get(url + "api/secciones")
        .then((response) => {
          this.itemsCategoria = response.data;
          console.log(this.itemsCategoria)
        })
        .catch((e) => {});
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.seccionEncuestaItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.seccionEncuestaItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
     // this.desserts.splice(this.editedIndex, 1);
      axios.delete(url + "api/Survey/"+this.seccionEncuestaItem.id)
     .then(response => {
      this.initialize();
     this.closeDelete();
     })
     .catch((e) => {
          });;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.seccionEncuestaItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.seccionEncuestaItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    
    save() {
      if (this.editedIndex > -1) {
        axios 
          .put(url + "api/SurveySection/" + this.seccionEncuestaItem.id, this.seccionEncuestaItem)
          .then((response) => {
            this.initialize();
          })
          .catch((error) => {
            if (error.response.status == 400){
              alert("entra 400")
              console.log(error.response.data.errors)
            }else if (error.response.status == 404){
              alert("entra 404")
              console.log(error.response.data.errors)
            }
          });
      } else {   
        axios
          .post(url + "api/SurveySection", this.seccionEncuestaItem)
          .then((response) => {
            if (response.status == 201) {
              this.mensajeRespuesta = "Registro Creado Correctamente";
              this.dialogMensajeRespuesta = true;
              this.initialize();
              this.closeDelete();
            }
          })
          .catch((error) => {
            if (error.response.status == 400){
              console.log(error.response.data.errors)
            }else if (error.response.status == 404){
              console.log(error.response.data.errors)
            }
            console.log(error)
          });
      }
      this.close();
    },
  },
};
</script>

<style lang="scss">
.tim-note {
  bottom: 10px;
  color: #c0c1c2;
  display: block;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  left: 0;
  margin-left: 20px;
  width: 260px;
}
</style>
