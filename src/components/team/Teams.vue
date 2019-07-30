<template>
  <v-app>
    <Header />
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex xs12>
            <v-card color="blue" class="white--text" v-for="team in teams" :key="team.id">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{team.data.name}}</div>
                      <div>Head Coach: {{team.data.headcoach}}</div>
                      <div>({{team.data.foundation}})</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    :src="team.data.imageLink"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions>
                <v-btn 
                flat 
                dark
                @click="viewTeam(team.id, team.data)"
                >
                View Team
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
    name: 'Teams',
    methods: {
      viewTeam (id, teamData) {
        this.$store.dispatch('selectTeam', id)
        this.$router.push('/team/' + teamData.name)
      }
    },
    computed: {
      teams () {
        return this.$store.getters.getAllTeams
      }
    }
  }
</script>