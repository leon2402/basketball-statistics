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
            <v-card v-for="playreport in allPlayReports" :key="playreport.id">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{playreport.data.liga}}</h3>
                  
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn 
                flat  
                color="orange"
                @click="editPlayReport(playreport.id)"
                >
                Spiel Bericht bearbeiten
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
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
    methods: {
        editPlayReport (id) {
            this.$store.dispatch('selectPlayReport', id)
            this.$router.push('/playreportedit/'+ id)
        }
    },
    computed: {
        allPlayReports () {
            return this.$store.getters.getAllPlayReports
        }
    }
  }
</script>