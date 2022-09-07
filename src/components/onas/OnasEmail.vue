<template>
  <div>
    <div class="container">
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="form-group">
                <input type="file" @change="onFileUpload">
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block btn-lg">Upload File</button>
            </div>
        </form>
    </div>    
  </div>
</template>

<script>
import axios from "axios";
const url = "https://dynamicliveconversationapi.azurewebsites.net/"
export default {
  data() {
      return {
         FILE: null,
         name: ''
      };
    },
    methods: {
        onFileUpload (event) {
          this.FILE = event.target.files[0]
        },
        onSubmit() {
          // upload file
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