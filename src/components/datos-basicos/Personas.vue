<template>
  <div>
    <v-container id="Demografico" fluid tag="section"> </v-container>
    <v-container>
      <!--   <v-card>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table> -->
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
          sort-by="Registros"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Registros Personas</v-toolbar-title>
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
                            v-model="personas.id"
                            label="Id Registro"
                            disabled
                            type="number"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="personas.email"
                            label="Email"
                            type="Email"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="personas.idDocumentType"
                            :items="itemsDocumentType"
                            item-text="valorRegistro"
                            item-value="id"
                            menu-props="auto"
                            label="Tipo Documento"
                            hide-details
                            single-line
                            required
                          ></v-select>
                          <!-- <v-text-field
                            v-model="personas.idDocumentType"
                            label="Tipo Documento"
                            type="number"
                          ></v-text-field> -->
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="personas.documento"
                            label="Documento"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="personas.names"
                            label="Nombres"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="personas.lastNames"
                            label="Apellidos"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="personas.age"
                            label="Edad"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            v-model="personas.idGender"
                            :items="itemsGender"
                            item-text="genero"
                            item-value="id"
                            menu-props="auto"
                            label="Genero"
                            hide-details
                            single-line
                            required
                          ></v-select>
                          <!-- <v-text-field
                            v-model="personas.idGender"
                            label="Genero"
                          ></v-text-field> -->
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            v-model="personas.idMaritalStatus"
                            :items="itemsMaritalStatus"
                            item-text="valorRegistro"
                            item-value="id"
                            menu-props="auto"
                            label="Estado Civil"
                            hide-details
                            single-line
                            required
                          ></v-select>
                          <!-- <v-text-field
                            v-model="personas.idMaritalStatus"
                            label="Estado Civil"
                          ></v-text-field> -->
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="personas.address"
                            label="Direecion"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="personas.phoneNumber"
                            label="Numero Telefono"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            v-model="personas.idCity"
                            :items="itemsCity"
                            item-text="cityName"
                            item-value="id"
                            menu-props="auto"
                            label="Ciudad"
                            hide-details
                            single-line
                            required
                          ></v-select>
                          <!-- <v-text-field
                            v-model="personas.idCity"
                            label="Ciudad"
                          ></v-text-field> -->
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
      <v-dialog v-model="dialogMensajeRespuesta" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">{{ mensajeRespuesta }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="blue darken-1"
              text
              @click="dialogMensajeRespuesta = false"
              >Aceptar</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>

var url = "https://dynamicliveconversationapi.azurewebsites.net/";
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    dialogMensajeRespuesta: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Tipo Documento", value: "idDocumentType" },
      { text: "Documento", value: "documento" },
      { text: "Nombres", value: "names" },
      { text: "Apellidos", value: "lastNames" },
      { text: "Email", value: "email" },
      { text: "Edad", value: "age" },
      { text: "Gender", value: "idGender" },
      { text: "Dirección", value: "address" },
      { text: "Telefono", value: "phoneNumber" },
      { text: "Cuidad", value: "idCity" },
      { text: "Estado Civil", value: "idMaritalStatus" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    personas: {
      address: "",
      age: 0,
      documento: "",
      email: "",
      idCity: "",
      idDocumentType: "",
      idGender: "",
      idMaritalStatus: "",
      lastNames: "",
      names: "",
      phoneNumber: "",
    },
    defaultItem: {
      address: "",
      age: 0,
      documento: "",
      email: "",
      idCity: "",
      idDocumentType: "",
      idGender: "",
      idMaritalStatus: "",
      lastNames: "",
      names: "",
      phoneNumber: "",
    },
    mensajeRespuesta: null,
    itemsDocumentType: [],
    itemsMaritalStatus: [],
    itemsGender: [],
    itemsCity: [],
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Registro" : "Editar Registro";
    },
  },

  watch: {
    dialog(valor) {
      valor || this.close();
    },
    dialogDelete(valor) {
      valor || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.cargarTipoDocumento();
    this.cargarMaritalStatus();
    this.cargarGender();
    this.cargarCity();
  },

  methods: {
    initialize() {
      axios
        .get(url + "api/personas")
        .then((response) => {
          this.desserts = response.data;
          console.log(response.data);
        })
        .catch((e) => {});
    },
    cargarTipoDocumento() {
      axios
        .get(url + "api/tipo-documentos")
        .then((response) => {
          this.itemsDocumentType = response.data;
          console.log(response.data);
        })
        .catch((e) => {});
    },
    cargarMaritalStatus() {
      axios
        .get(url + "api/estados-civiles")
        .then((response) => {
          this.itemsMaritalStatus = response.data;
          console.log(response.data);
        })
        .catch((e) => {});
    },
    cargarGender() {
      axios
        .get(url + "api/generos")
        .then((response) => {
          this.itemsGender = response.data;
          console.log(response.data);
        })
        .catch((e) => {});
    },
    cargarCity() {
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
      this.personas = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.personas = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // this.desserts.splice(this.editedIndex, 1);
      console.log(this.personas.id);
      axios
        .delete(url + "api/personas/" + this.personas.id)
        .then((response) => {
          if (response.status == 200) {
            this.mensajeRespuesta = "Registro Eliminado Correctamente";
            this.dialogMensajeRespuesta = true;
            this.initialize();
            this.closeDelete();
          }
        })
        .catch((e) => {});
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.personas = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.personas = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      console.log(this.editedIndex);
      if (this.editedIndex > -1) {
        axios
          .put(url + "api/personas/" + this.personas.id, this.personas)
          .then((response) => {
            if (response.status == 200) {
              this.mensajeRespuesta = "Registro Editado Correctamente";
              this.dialogMensajeRespuesta = true;
              this.initialize();
              this.close();
            }

            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        console.log(this.personas);
        axios
          .post(url + "api/personas", this.personas)
          .then((response) => {
            if (response.status == 201) {
              this.mensajeRespuesta = "Registro Creado Correctamente";
              this.dialogMensajeRespuesta = true;
              this.initialize();
              this.close();
            }
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          });
      }
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
