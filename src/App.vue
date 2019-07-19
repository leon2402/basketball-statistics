<template>
  <v-app dark>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'
import Team from './components/Team.vue'
import AllPlayer from './components/AllPlayer.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    Team,
    AllPlayer, 
    Player
  },
}
</script>
