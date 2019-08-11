<template>
  <v-app>
    <Header />
    <v-content class="mainbackground">
      <v-container justify-center>
        <v-layout justify-center wrap>
          <v-flex xs12 md6  class="background">
            <v-card color="white" max-width="95%" class="mx-auto" height="1000px">
              <v-img class="white--text"
                :src="news.data.imageLink"
                contain>
              </v-img>
              <v-card-title>
                <div>
                  <div>{{news.data.title}}</div>
                </div>
              </v-card-title>
                <v-card-text class="text--primary">
                  <div>
                    
                  </div>
                </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md2  class="background">
            <v-layout justify-center wrap>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Alle News</h3></tr>
                </v-flex>
              </v-layout>
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
    },
  }
</script>

<style>
  .mainbackground {
    background-color: lightgrey;
  }
  .newspiccenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .article body{
    font-size: 12px;
  }
</style>