<template>
  <v-container>
  <v-app>
    <v-card>
      <v-card-title>
        <h1>Envia Correo</h1>
      </v-card-title>
      <v-card-text>
      <p>Por favor suba el archivo csv para enviar el correo<p/>
      </v-card-text>
      <v-card-text>
        <v-form  @submit.prevent="onSubmit" >
          <v-file-input 
            label="Input"
            prepend-icon="mdi-attachment"
            @change="onFileUpload"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="onSubmit" color="success">Enviar Correos</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-app>
  </v-container>
</template>

<script>
import axios from "axios";
const url = "https://localhost:7008/"
export default {
  data() {
      return {
         FILE: null,
      };
    },
    methods: {
        onFileUpload (files) {
          this.FILE = files
        },
        onSubmit() {

          const formData = new FormData()
          formData.append('postedFile', this.FILE, this.FILE.name)
          debugger;
          axios.post(url + "api/OnasSurvey", formData, {
          headers: {
          "Content-Type": "application/json",
          'Content-Type': 'multipart/form-data'
        },
          }).then((res) => {
            console.log(res)
          })
        }  
    }
}
</script>
<style scoped lang="scss">
.container {
  max-width: 600px;
}