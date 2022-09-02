<script>
import ListaPregunta from './ListaPregunta.vue';

    export default {
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            v => !!v || "Question is required",
            v => (v && v.length <= 60) || "Question must be less than 30 characters",
        ],
        select: null,
        items: [
            "Preguntas Singular",
            "Pregunta lista",
            "pregunta de lista Ordenada",
            "Pregunta de lsita con respuesta",
            "Pregunta de otra pregunta",
            "Pregunta de emoticones",
            "Pregunta de estrellas",
            "Pregunta que de estado de animo",
            "pregunat de lista seleccionable con respuesta",
            "pregunta de ranking",
            "pregunta de varias selecciones",
        ]
    }),
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
    components: { ListaPregunta }
}
  </script>
<template>
    <v-card>
        <v-card-title>Categoria</v-card-title>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <v-container>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                    v-model="name"
                    :counter="60"
                    :rules="nameRules"
                    label="Escriba su pregunta"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-select
                   
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Tipos de preguntas"
                    required
                    ></v-select>
                </v-col>
            </v-row>
           <ListaPregunta></ListaPregunta>
            <v-row>
                <v-col class="text-center">
                    <v-btn color="success" class="mr-4" @click="validate">
                        Enviar
                    </v-btn>
                </v-col>
                
            </v-row>
        </v-container>
            
        
            
            
            
        
        </v-form>
    </v-card>
  </template>
<style>

</style>