<template>
  <v-app dark v-if="!siteLoading">
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed: {
    siteLoading () {
      return this.$store.getters.siteLoading
    }
  }
}
</script>
