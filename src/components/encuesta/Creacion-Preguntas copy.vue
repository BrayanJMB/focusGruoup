<template>
  <v-card>
    <v-system-bar
      color="transparent"
      height="50"
      class="text--primary"
      >
       <v-toolbar-title>Title Encuesta</v-toolbar-title>

      <v-spacer></v-spacer>

     

      <v-btn
        class="ma-1"
        color="dark"
        plain
      >
        Compartir
      </v-btn>

        <v-btn
    elevation="3"
    small
    outlined
      color="success"
    >Publicar</v-btn>
      </v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>My Document</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
         <v-btn
                :color="estadovista ?   'grey' :'primary'"
      class="ma-2 white--text"
              fab
               @click="estadovista = !estadovista"
            >
              <v-icon>mdi-comment-edit-outline</v-icon>
            </v-btn>
             <v-btn
              
              :color="estadovista ? 'primary' : 'grey'"
      class="ma-2 white--text"
              fab
            @click="estadovista = !estadovista"

            >
              <v-icon dark>mdi-comment-eye-outline</v-icon>
            </v-btn>
      </div>
    </v-toolbar>
    <v-banner
      single-line
      :sticky="sticky"
    >
      We can't save your edits while you are in offline mode.

      <template v-slot:actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Get Online
        </v-btn>
      </template>
    </v-banner>
    <v-card-text class="grey lighten-5">
      <v-sheet
        max-width="1000"
        height="400"
        class="mx-auto"
      ></v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data: () => ({
    }),
}
</script>