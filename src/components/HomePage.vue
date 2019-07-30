<template>
  <v-app dark>
    <Header />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'

  export default {
    name: 'HomePage',
    components: {
      Header,
      Footer
    }
  }
</script>