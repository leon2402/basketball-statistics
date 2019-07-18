<template>
  <v-app dark>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  },
}
</script>
