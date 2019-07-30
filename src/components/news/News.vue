<template>
  <v-app>
    <Header />
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            {{news.data.title}}
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
        news () {
            return this.$store.getters.getSelectedNews
        }
    }
  }
</script>