<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title> 
        <router-link to="/" tag="span" style="cursor: pointer">Basketball Stats</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            <v-card v-for="player in this.$store.state.player" :key="player.id">
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
                flat  
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
    <v-footer app fixed>
      <span>&copy; Basketball Stats by Daniel Warlich and Leon Rostek</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'AllPlayer',
    data () {
      return{
        menuItems: [
          { title: 'AllPlayer', link:'/allplayer'},
          { title: 'Teams', link:'/teams'},
        ]
      }
    },
    methods: {
      onLoadPlayer (playerdata, id) {
        this.$store.dispatch('getSelectedPlayer', id)
        this.$router.push('/player/' + playerdata.name + '/' + id)
      }
    }
  }
</script>