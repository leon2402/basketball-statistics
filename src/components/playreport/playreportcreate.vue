<template>
    <v-container>
        <v-layout row>
            <v-flex xs6>
                <h2>Team erstellen</h2>
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
                        <v-flex xs6 offset-sm3>
                            <v-text-field
                                v-model="name"
                                name="name"
                                label="Name"
                                id="name">
                            </v-text-field>
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
                            <v-text-field
                                v-model="attendance"
                                name="attendance"
                                label="Attendance"
                                id="attendance">
                            </v-text-field>
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
                            <v-select
                                v-model="player1Team1"
                                :items="playerTeam1"
                                items-text="data.name"
                                items-value="id"
                                name="player1Team1"
                                label="Spieler 1 Team 2"
                                id="player1Team2"
                                
                                >
                                <template slot="selection" scope="data">
                                    {{ data.item.data.fullname }} 
                                </template>
                                <template slot="item" scope="data">
                                    <template>
                                        <v-list-tile-content>
                                        <v-list-tile-title v-html="data.item.data.fullname "></v-list-tile-title>
                                        </v-list-tile-content>
                                    </template>
                                </template>
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
                                v-model="player1Team2"
                                :items="playerTeam2"
                                items-text="data.name"
                                items-value="id"
                                name="player1Team2"
                                label="Spieler 1 Team 2"
                                id="player1Team2"
                                
                                >
                                <template slot="selection" scope="data">
                                    {{ data.item.data.fullname }} 
                                </template>
                                <template slot="item" scope="data">
                                    <template v-if="typeof data.item !== 'object'">
                                        <v-list-tile-content v-text="data.item"></v-list-tile-content>
                                    </template>
                                    <template v-else>
                                        <v-list-tile-content>
                                        <v-list-tile-title v-html="data.item.data.fullname"></v-list-tile-title>
                                        </v-list-tile-content>
                                    </template>
                                </template>
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
</template>

<script>
    export default {
        data () {
            return {
                name: null,
                attendance: null,
                team1: null,
                team2: null,
                player1Team1: null,
                player1Team2: null,
                teamNames: [],
                playerTeam1: this.persons,
                playerTeam2: this.persons,
            }
        },
        methods: {
            createPlayReport () {
               
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
            /*checkForm () {
                if(this.name && this.firstname && this.team && this.role){
                    return false
                } else {
                    return true
                }
            }*/
        },
        watch: {
            team1 () {
                this.playerTeam1 = null
                let teamID
                this.teams.map((team, index) => {
                    if(team.data.name == this.team1){
                        teamID = team.id
                    }
                })
                this.playerTeam1 =  this.persons.filter(person => person.data.teamID == teamID)
            },
            team2 () {
                this.playerTeam2 = null
                let teamID
                this.teams.map((team, index) => {
                    if(team.data.name == this.team2){
                        teamID = team.id
                    }
                })
                this.playerTeam2 =  this.persons.filter(person => person.data.teamID == teamID)
            }
        },
        mounted () {
            this.teams.map((team, index) => {
                this.teamNames.push(team.data.name)
            }) 
        },
    }
</script>
        