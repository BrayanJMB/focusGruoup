<template>
  <v-navigation-drawer app permanent>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <!-- <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img> -->
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item :to="'../dashboard'">
        <v-list-item-icon>
          <v-icon>mdi-monitor-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-title >Dashboard</v-list-item-title>
      </v-list-item>

      <v-list-group
        v-for="(item, e) in items"
        :key="e"
        v-model="item.vista"
        active-class="pink--text"
        :prepend-icon="item.icon"
      >
        <template v-slot:activator>
          <v-list-item-title active-class="pink--text">
            {{item.name}}</v-list-item-title>
        </template>
    
        <v-list-item
          v-if="Object.keys(item.datasubmenu).length > 0"
            v-for="(datasubmenu, i) in item.datasubmenu"
            :key="i"
            link
            :to="datasubmenu.submenulink"
            active-class="pink--text"
            @click="item.vista = !item.vista"
          >
            <v-list-item-title
              v-text="datasubmenu.submenuname"
            ></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="datasubmenu.submenuicon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
debugger;
export default {
  data: () => ({
    drawer: true,
    mini: false,
    group: null,
    sesion: false,
    items: [
      {
        name: "Datos Básicos",
        icon: "mdi-comment-question-outline",
        link: "/",
        vista: false,
        datasubmenu: [
          {
            submenuname: "Persona",
            submenuicon: "mdi-account-supervisor-circle-outline",
            submenulink: "/datos-basicos/personas",
          },
          {
            submenuname: "Genero",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/genero",
          },
          {
            submenuname: "Compañia",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/company",
          },
          {
            submenuname: "Rol",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/rol",
          },
          {
            submenuname: "Preguntas",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/preguntas",
          }
        ],
      },
      {
        name: "Encuestas Dinamicas",
        icon: "mdi-comment-question-outline",
        link: "/",
        vista: false,
        datasubmenu: [
          {
            submenuname: "Moderador",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/secciones",
          },
          {
            submenuname: "Invitados",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/invitados",
          },
          {
            submenuname: "Categorias",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/categorias",
          },
          {
            submenuname: "Encuesta",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/encuestas",
          },
          {
            submenuname: "Seccion Encuesta",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/seccion-encuestas",
          },
          {
            submenuname: "Encuestaaaas",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/encuesta/creacion-encuesta",
          },
          {
            submenuname: "Sala",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/secciones",
          },
        ],
      },
      {
        name: "Encuestas Programadas",
        icon: "mdi-comment-question-outline",
        link: "/",
        vista: false,
        datasubmenu: [
          {
            submenuname: "Moderador",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/secciones",
          },
          {
            submenuname: "Invitados",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/invitados",
          },
          {
            submenuname: "Categorias",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/categorias",
          },
          {
            submenuname: "Encuesta",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/encuestas",
          },
          {
            submenuname: "Seccion Encuesta",
            submenuicon: "mdi-gender-male-female",
            submenulink: "/datos-basicos/seccion-encuesta",
          }
        ],
      },
      {
        name: "Sala",
        icon: "mdi-wechat",
        link: "registrar",
        vista: false,
        datasubmenu: [
          {
            submenuname: "Personas",
            submenuicon: "mdi-account-supervisor-circle-outline",
            submenulink: "/datos-basicos/personas",
          },
          {
            submenuname: "Personas",
            submenuicon: "mdi-account-supervisor-circle-outline",
            submenulink: "/datos-basicos/personas",
          },
        ],
      },  
      {
        name: "Datos",
        icon: "mdi-chart-histogram",
        link: "salir",
        vista: false,
        datasubmenu: [
          {
            submenuname: "Ver Datos",
            submenuicon: "mdi-chart-scatter-plot-hexbin",
            submenulink: "/datos-basicos/personas",
          },
        ],
      },
    ],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
  methods: {
    logen() {
      this.$router.push("/registrar");
    },
  },
};
</script>