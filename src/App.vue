<template>
  <v-app dark v-if="!siteLoading">
    <router-view></router-view>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'
import Teams from './components/Teams.vue'
import AllPlayer from './components/AllPlayer.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    Teams,
    AllPlayer, 
    Player
  },
  computed: {
    siteLoading () {
      return this.$store.getters.siteLoading
    }
  }
}
</script>
