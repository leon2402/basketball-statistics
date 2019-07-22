<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title> 
        <router-link to="/" tag="span" style="cursor: pointer">Basketball Stats</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <p>{{player.data.name}}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Player',
    data () {
      return{
        menuItems: [
          { title: 'News', link:'/allnews'},
          { title: 'AllPlayer', link:'/allplayer'},
          { title: 'Teams', link:'/teams'},
        ]
      }
    },
    computed: {
      player () {
        return this.$store.getters.getSelectedPerson
      }
    }
  }
</script>