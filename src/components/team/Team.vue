<template>
  <v-app id="inspire" dark>
    <Header />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
              {{team.data.name}}
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../shared/Header.vue'
import Footer from '../shared/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    },
    computed: {
      team () {
        return this.$store.getters.getSelectedTeam
      }
    }
  }
</script>