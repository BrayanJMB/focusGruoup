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
            <v-toolbar-title>Registros Compañia</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="900px">
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
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="companies.id"
                          label="Id Company"
                          disabled
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="companies.nit"
                          label="NIT"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="companies.NombreCompania"
                            label="Nombre Compañia"
                            type="text"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="companies.Direccion"
                            label="Direccion"
                            type="text"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="companies.NumeroTelefonico"
                            label="Numero Telefonico"
                            type="text"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="companies.Celular"
                            label="Celular"
                            type="text"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="companies.CorreoElectronico"
                            label="Correo Electrónico"
                            type="Email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="companies.Contact"
                            label="Contacto"
                            type="text"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                           <v-select
                            v-model="companies.IdCiudad"
                            :items="itemsCity"
                            item-text="Ciudad"
                            item-value="id"
                            menu-props="auto"
                            label="Ciudad"
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
      { text: "NIT", value: "nit" },
      { text: "Nombre Compañia", value: "NombreCompania" },
      { text: "Direccion", value: "Direccion" },
      { text: "Número Telefónico", value: "NumeroTelefonico" },
      { text: "Celular", value: "Celular" },
      { text: "Correo Eléctronico", value: "CorreoElectronico" },
      { text: "Contacto", value: "Contact" },
      { text: "Ciudad", value: "IdCiudad" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    companies: {
      nit: "",
      NombreCompania: "",
      Direccion: "",
      NumeroTelefonico: "",
      Celular: "",
      CorreoElectronico: "",
      Contact: "",
      IdCiudad: "",
    },
    defaultItem: {
      nit: "",
      NombreCompania: "",
      Direccion: "",
      NumeroTelefonico: "",
      Celular: "",
      CorreoElectronico: "",
      Contact: "",
      IdCiudad: "",
    },
    itemsCity: [],
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Registro" : "Editar Registro";
    },
  },

  watch: {
    dialog(valorcompañia) {
      valorcompañia || this.close();
    },
    dialogDelete(valorcompañia) {
      valorcompañia || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.cargarCity();
  },

  methods: {
    initialize() {
      axios
        .get(url + "api/companias")
        .then((response) => {
          this.desserts = response.data;
        })
        .catch((e) => {
        });
    },cargarCity() {
      axios
        .get(url + "api/ciudades")
        .then((response) => {
          this.itemsCity = response.data;
          console.log(response.data);
        })
        .catch((e) => {});
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.companies = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.companies = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
     // this.desserts.splice(this.editedIndex, 1);
      console.log(this.companies.id)
      axios.delete(url + "api/companias/"+this.companies.id)
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
        this.companies = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.companies = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        axios
          .put(url + "api/companias/" + this.companies.id, this.companies)
          .then((response) => {
            this.initialize();
          })
          .catch((e) => {
           
          });
      } else {   
        axios
          .post(url + "api/companias", this.companies)
          .then((response) => {
            console.log(response.status)
            if (response.status == 201) {
              this.mensajeRespuesta = "Registro Creado Correctamente";
              this.dialogMensajeRespuesta = true;
              this.initialize();
              this.close();
            }
          })
          .catch((error) => {
            if (error.response.status == 400){
              alert("entra 400")
              console.log(error.response.data.errors)
            }else if (error.response.status == 404){
              alert("entra 404")
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
