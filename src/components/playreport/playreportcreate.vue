<template>
    <v-app>
        <Header />
        <v-content>
        <v-container>
            <v-layout row>
                <v-flex xs6>
                    <h2>Spiel erstellen</h2>
                </v-flex>
            </v-layout>
            <v-layout row v-if="error">
                <v-flex xs6>
                    <h2>{{error}}</h2>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-select
                                    v-model="liga"
                                    :items="ligen"
                                    name="liga"
                                    label="Liga Auswahl"
                                    id="liga">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-select
                                    v-model="team1"
                                    :items="teamNames"
                                    name="team"
                                    label="Team 1 Auswahl"
                                    id="team">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-select
                                    v-model="team2"
                                    :items="teamNames"
                                    name="team"
                                    label="Team 2 Auswahl"
                                    id="team">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-date-picker v-model="datePicker" color="green lighten-1" header-color="primary"></v-date-picker>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-time-picker v-model="time" color="green lighten-1" header-color="primary" format="24hr"></v-time-picker>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm3>
                                <v-btn
                                :loading="loadingCheck"
                                :disabled="loadingCheck"
                                color="secondary"
                                @click="createPlayReport"
                                >
                                Play Report erstellen
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
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
        data () {
            return {
                liga: null,
                ligen: ['NBA', 'BBL'],
                team1: null,
                team2: null,
                teamNames: [],
                datePicker: new Date().toISOString().substr(0, 10),
                time: null
            }
        },
        methods: {
            createPlayReport () {
                let teamID1
                this.teams.map((team, index) => {
                    if(team.data.name == this.team1){
                        teamID1 = team.id
                    }
                }) 
                let teamID2
                this.teams.map((team, index) => {
                    if(team.data.name == this.team2){
                        teamID2 = team.id
                    }
                })

                let newPlayReport = {
                    liga: this.liga,
                    team1: teamID1,
                    team2: teamID2,
                    date: this.submittableDateTime
                }
                //console.log(newPlayReport)
                this.$store.dispatch('createPlayReport', newPlayReport)
            }
        },
        computed: {
            loadingCheck () {
                return this.$store.getters.loading
            },
            error () {
                return this.$store.getters.error
            },
            teams  () {
                return this.$store.getters.getAllTeams
            },
            persons () {
                return this.$store.getters.getAllPersons
            },
            submittableDateTime () {
                const date = new Date(this.datePicker)
                const hours = this.time.match(/^(\d+)/)[1]
                const minutes = this.time.match(/:(\d+)/)[1]
                date.setHours(hours)
                date.setMinutes(minutes)
                return date
            },
            /*checkForm () {
                if(this.name && this.firstname && this.team && this.role){
                    return false
                } else {
                    return true
                }
            }*/
        },
        mounted () {
            this.teams.map((team, index) => {
                this.teamNames.push(team.data.name)
            }) 
        },
    }
</script>
        