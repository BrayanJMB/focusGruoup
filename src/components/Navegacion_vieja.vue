<!-- <template> 
    <div>
        <v-toolbar 
        nav
        color="deep-purple" 
        dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>FocusGroup</v-toolbar-title>
            <v-spacer></v-spacer>  
            <v-btn color="success" v-on:click="logen" v-if="this.$route.name !== 'registrar'">Ingreso</v-btn>
        </v-toolbar> 
        <v-navigation-drawer app v-model="drawer"  :mini-variant.sync="mini"
      permanent>
       <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider
  inset
></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          link
          @click.stop="mini = !mini"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
             <v-list nav dense>
                <v-list-item-group
              
                active-class="deep-purple--text text--accent-4"
                >
                <v-container  v-for="(item, index) in items" :key="index">
                <v-list-item :to="item.link"
                  v-if="item.vista === true"
                 >
                    <v-list-item-icon>
                    <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{item.name}}</v-list-item-title>
                </v-list-item>
                </v-container>
                </v-list-item-group>
            </v-list> 
        </v-navigation-drawer>
             <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      absolute
      
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-spacer></v-spacer>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click.stop="mini = !mini"
        >
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> 
    </div>

</template>-->
<template>

    <v-navigation-drawer app permanent>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

       
      </v-list>
      <v-divider></v-divider>
      <v-list
        
        dense
      >
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
<!-- 
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content> -->
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    mini: false,
    group: null,
    sesion: false,
    items: [
       { name: "Inicio", icon: "mdi-home", link: "/", vista: true},      
      //  { name: "Mi Cuenta", icon: "mdi-account", link: "perfil", vista: false},
        { name: "Registro", icon: "mdi-account-arrow-right", link: "registrar", vista: true},
       { name: "Salir", icon: "mdi-code-less-than", link: "salir", vista: false},
        
    ],
  }),
  methods:{
    logen(){
        this.$router.push('/registrar')
    },

  }
};
</script>