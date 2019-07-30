<template>
    <v-app-bar app clipped-left dark flat tile>
      <v-toolbar-title> 
        <router-link to="/" tag="span" style="cursor: pointer">Basketball Stats</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
        text
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return{
        menuItems: [
          { title: 'News', link:'/allnews'},
          { title: 'AllPlayer', link:'/allplayer'},
          { title: 'Teams', link:'/teams'},
        ]
      }
    },
  }
</script>