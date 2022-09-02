<script setup>
import { ref } from "vue"; 
import CampoPregunta from "./CampoPregunta.vue";
const ListQuestions = ref(0);

const AddQuest = () =>{
    if(ListQuestions.value <5)
        return ListQuestions.value ++
};

const MinuQuest = () =>{
    if(ListQuestions.value >-1)
        return ListQuestions.value = ListQuestions.value - 1
};

</script>
<template>
    <v-row>
        <v-col>
            <v-text-field
                    :counter="60"
                    label="Escriba la posible respuesta"
                    required
                ></v-text-field>
                <CampoPregunta v-for="item in ListQuestions" :key="item" />
                
        </v-col>
        <v-col>
            
            <v-btn @click="AddQuest" class="mx-2" fab dark x-small>
                <v-icon >
                    mdi-plus
                </v-icon>
            </v-btn>
            <v-btn @click="MinuQuest" class="mx-2" fab dark x-small>
                <v-icon >
                    mdi-minus
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>
<style>

</style>