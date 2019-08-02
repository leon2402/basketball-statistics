<template>
  <v-app>
    <Header />
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            <v-card v-for="player in players" :key="player.id">
              <v-img
                :src="player.data.imageLink"
                aspect-ratio="0.7"
              ></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{player.data.name}}</h3>
                  <div> {{ player.data.firstname }} </div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn 
                text  
                color="orange"
                @click="onLoadPlayer(player.data, player.id)"
                >
                Show Player
                </v-btn>
              </v-card-actions>
            </v-card>
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
    name: 'AllPlayer',
    data () {
      return{
        menuItems: [
          { title: 'News', link:'/allnews'},
          { title: 'AllPlayer', link:'/allplayer'},
          { title: 'Teams', link:'/teams'},
        ]
      }
    },
    methods: {
      onLoadPlayer (playerdata, id) {
        this.$store.dispatch('selectPerson', id)
        this.$router.push('/player/' + playerdata.name + '/' + id)
      }
    },
    computed: {
      players () {
        const allplayer = this.$store.getters.getAllPersons.filter(item => item.data.role == "player")
        return allplayer
      }
    }
  }
</script>