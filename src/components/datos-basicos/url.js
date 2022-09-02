import axios from "axios";

var url = "https://dynamicliveconversationapi.azurewebsites.net/";
export default (await import('vue')).defineComponent({
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
.catch((e) => { });
},
cargarTipoDocumento() {
axios
.get(url + "api/tipo-documentos")
.then((response) => {
this.itemsDocumentType = response.data;
console.log(response.data);
})
.catch((e) => { });
},
cargarMaritalStatus() {
axios
.get(url + "api/estados-civiles")
.then((response) => {
this.itemsMaritalStatus = response.data;
console.log(response.data);
})
.catch((e) => { });
},
cargarGender() {
axios
.get(url + "api/generos")
.then((response) => {
this.itemsGender = response.data;
console.log(response.data);
})
.catch((e) => { });
},
cargarCity() {
axios
.get(url + "api/ciudades")
.then((response) => {
this.itemsCity = response.data;
console.log(response.data);
})
.catch((e) => { });
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
.catch((e) => { });
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
});
function __VLS_template() {
// @ts-ignore
[search, headers, desserts, dialog, formTitle, personas, itemsDocumentType, itemsGender, itemsMaritalStatus, itemsCity, close, save, dialogDelete, closeDelete, deleteItemConfirm, editItem, deleteItem, initialize, dialogMensajeRespuesta, mensajeRespuesta];
return {};
}
