<template>
<v-container class="py-12" grid-list-md >
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Lo Sentimos</div>
      <p class="text-h4 text--primary">
        La Ruta '{{this.$route.path}}' no se encuentra
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        
        color="teal accent-4"
        class="ma-2 white--text"
        v-on:click="volver"
      >
        Volver
      </v-btn>
      <v-btn
        color="blue lighten-1"
      class="ma-2 white--text"
        v-on:click="inicio"
      >
        Inicio
      </v-btn>
    </v-card-actions>

    <!-- <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition> -->
  </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      reveal: false,
    }),
    methods: {
        volver(){
            this.$router.go(-1)
        },
        inicio(){
            this.$router.push('/')
        },
    },
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>