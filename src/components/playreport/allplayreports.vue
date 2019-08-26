<template>
  <v-app>
    <Header />
     <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            <v-card v-for="playreport in allPlayReports" :key="playreport.id">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{playreport.data.liga}}</h3>
                  <p>{{teamName(playreport.data.team1)}} : {{teamName(playreport.data.team2)}}</p>

                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn 
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
    name: 'AllPlayReports',
    methods: {
        editPlayReport (id) {
            this.$store.dispatch('selectPlayReport', id)
            this.$router.push('/playreportedit/'+ id)
        },
        teamName (teamID) {
          const team = this.teams.find(team => team.id === teamID)
          return team.data.name
        }
    },
    computed: {
      allPlayReports () {
        return this.$store.getters.getUnfinishedPlayReports
      },
      teams () {
        return this.$store.getters.getAllTeams
      }
    }
  }
</script>