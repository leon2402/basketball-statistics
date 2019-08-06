<template>
    <v-app>
        <Header />
        <v-content>
            <v-container v-if="!loadingCheck">
                <v-layout row>
                    <v-flex xs6>
                        <h2>Spiel fertigstellen</h2>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs6>
                        <form>
                            <v-layout row>
                                <v-flex xs6 offset-sm2>
                                    <h3>Liga: {{playReport.data.liga}} </h3>
                                    <h3>Zeit: {{playReport.data.date.toDate()}} </h3>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-flex>
                    <v-flex xs6>
                        <form>
                            <v-layout row>
                                <v-flex xs6 offset-sm2>
                                    <h3>Team1: {{teamNames[0]}} </h3>
                                    <h3>Team2: {{teamNames[1]}} </h3>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <form>
                            <v-layout row>
                                <v-flex xs3 offset-sm1>
                                    <v-text-field
                                        v-model="ergebnis1viertel"
                                        name="ergebnis1viertel"
                                        label="Ergebnis 1. Viertel"
                                        id="ergebnis1viertel">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs3 offset-sm1>
                                    <v-text-field
                                        v-model="ergebnis2viertel"
                                        name="ergebnis4viertel"
                                        label="Ergebnis 2. Viertel"
                                        id="ergebnis2viertel">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs3 offset-sm1>
                                    <v-text-field
                                        v-model="ergebnis3viertel"
                                        name="ergebnis4viertel"
                                        label="Ergebnis 3. Viertel"
                                        id="naergebnis3viertelme">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs3 offset-sm1>
                                    <v-text-field
                                        v-model="ergebnis4viertel"
                                        name="ergebnis4viertel"
                                        label="Ergebnis 4. Viertel"
                                        id="ergebnis4viertel">
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
                                <v-flex xs4 offset-sm2>
                                    <v-text-field
                                        v-model="gesamtErgebnis"
                                        name="gesamtErgebnis"
                                        label="Gesamtergebnis"
                                        id="gesamtErgebnis">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs4 offset-sm2>
                                    <v-text-field
                                        v-model="attendance"
                                        name="attendance"
                                        label="Anzahl Zuschauer"
                                        id="attendance">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <form>
                            <v-layout row>
                                <v-flex xs3 offset-sm1>
                                    <v-select
                                        v-model="referee1"
                                        :items="referees"
                                        name="referee1"
                                        label="Schiedsrichter 1 Auswahl"
                                        id="referee1">
                                    </v-select>
                                </v-flex>
                                <v-flex xs3 offset-sm1>
                                    <v-select
                                        v-model="referee2"
                                        :items="referees"
                                        name="referee2"
                                        label="Schiedsrichter 2 Auswahl"
                                        id="referee2">
                                    </v-select>
                                </v-flex>
                                <v-flex xs3 offset-sm1>
                                    <v-select
                                        v-model="referee3"
                                        :items="referees"
                                        name="referee2"
                                        label="Schiedsrichter 3 Auswahl"
                                        id="referee3">
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <h3>Team1: {{teamNames[0]}} </h3>
                        <v-simple-table>
                            <thead>
                            <tr>
                                <th class="text-left">Name</th>
                                <th class="text-left">MP</th>
                                <th class="text-left">FG</th>
                                <th class="text-left">FGA</th>
                                <th class="text-left">3P</th>
                                <th class="text-left">3PA</th>
                                <th class="text-left">FT</th>
                                <th class="text-left">FTA</th>
                                <th class="text-left">ORB</th>
                                <th class="text-left">DRB</th>
                                <th class="text-left">AST</th>
                                <th class="text-left">STL</th>
                                <th class="text-left">BLK</th>
                                <th class="text-left">TOV</th>
                                <th class="text-left">PF</th>
                                <th class="text-left">PTS</th>
                                <th class="text-left">+/-</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in playerTeam1" :key="item.id">
                                <td>{{ item.data.name }}</td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].MP" name="MP" id="MP"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].FG" name="FG" id="FG"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].FGA" name="FGA" id="FGA"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].ThreeP" name="ThreeP" id="ThreeP"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].ThreePA" name="ThreePA" id="ThreePA"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].FT" name="FT" id="FT"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].FTA" name="FTA" id="FTA"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].ORB" name="ORB" id="ORB"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].DRB" name="DRB" id="DRB"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].AST" name="AST" id="AST"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].STL" name="STL" id="STL"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].BLK" name="BLK" id="BLK"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].TOV" name="TOV" id="TOV"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].PF" name="PF" id="PF"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].PTS" name="PTS" id="PTS"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam1[item.id].plusMinus" name="plusMinus" id="plusMinus"></v-text-field></td>
                            </tr>
                            </tbody>
                        </v-simple-table>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <h3>Team2: {{teamNames[1]}} </h3>
                        <v-simple-table>
                            <thead>
                            <tr>
                                <th class="text-left">Name</th>
                                <th class="text-left">MP</th>
                                <th class="text-left">FG</th>
                                <th class="text-left">FGA</th>
                                <th class="text-left">3P</th>
                                <th class="text-left">3PA</th>
                                <th class="text-left">FT</th>
                                <th class="text-left">FTA</th>
                                <th class="text-left">ORB</th>
                                <th class="text-left">DRB</th>
                                <th class="text-left">AST</th>
                                <th class="text-left">STL</th>
                                <th class="text-left">BLK</th>
                                <th class="text-left">TOV</th>
                                <th class="text-left">PF</th>
                                <th class="text-left">PTS</th>
                                <th class="text-left">+/-</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in playerTeam2" :key="item.id">
                                <td>{{ item.data.name }}</td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].MP" name="MP" id="MP"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].FG" name="FG" id="FG"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].FGA" name="FGA" id="FGA"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].ThreeP" name="ThreeP" id="ThreeP"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].ThreePA" name="ThreePA" id="ThreePA"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].FT" name="FT" id="FT"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].FTA" name="FTA" id="FTA"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].ORB" name="ORB" id="ORB"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].DRB" name="DRB" id="DRB"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].AST" name="AST" id="AST"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].STL" name="STL" id="STL"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].BLK" name="BLK" id="BLK"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].TOV" name="TOV" id="TOV"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].PF" name="PF" id="PF"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].PTS" name="PTS" id="PTS"></v-text-field></td>
                                <td><v-text-field v-model="playerDataTeam2[item.id].plusMinus" name="plusMinus" id="plusMinus"></v-text-field></td>
                            </tr>
                            </tbody>
                        </v-simple-table>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs6>
                        <form>
                            <v-layout row>
                                <v-flex xs6 offset-sm1>
                                    <v-btn
                                    :loading="loadingCheck"
                                    :disabled="loadingCheck"
                                    color="secondary"
                                    @click="createPlayReport(playReport.id)"
                                    >
                                    Play Report fertigstellen
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
                teamNames: null,
                ergebnis1viertel: null,
                ergebnis2viertel: null,
                ergebnis3viertel: null,
                ergebnis4viertel: null,
                gesamtErgebnis: null,
                attendance: null,
                referee1: null,
                referee2: null,
                referee3: null,
                referees: ['Schiedsrichter1', 'Schiedsrichter2', 'Schiedsrichter3'],
                playerTeam1: null,
                playerTeam2: null,
                playerDataTeam1: null,
                playerDataTeam2: null,
            }
        },
        methods: {
            createPlayReport (id) {
                for (let item in this.playerDataTeam1) {
                    this.playerDataTeam1[item]['FGP'] = parseFloat(this.playerDataTeam1[item].FG) / parseFloat(this.playerDataTeam1[item].FGA)
                    this.playerDataTeam1[item]['ThreePO'] = parseFloat(this.playerDataTeam1[item].ThreeP) / parseFloat(this.playerDataTeam1[item].ThreePA)
                    this.playerDataTeam1[item]['FTP'] = parseFloat(this.playerDataTeam1[item].FT) / parseFloat(this.playerDataTeam1[item].FTA)
                    this.playerDataTeam1[item]['TRB'] = parseFloat(this.playerDataTeam1[item].ORB) + parseFloat(this.playerDataTeam1[item].DRB)
                }
                for (let item in this.playerDataTeam2) {
                    this.playerDataTeam1[item]['FGP'] = parseFloat(this.playerDataTeam1[item].FG) / parseFloat(this.playerDataTeam1[item].FGA)
                    this.playerDataTeam1[item]['ThreePO'] = parseFloat(this.playerDataTeam1[item].ThreeP) / parseFloat(this.playerDataTeam1[item].ThreePA)
                    this.playerDataTeam1[item]['FTP'] = parseFloat(this.playerDataTeam1[item].FT) / parseFloat(this.playerDataTeam1[item].FTA)
                    this.playerDataTeam1[item]['TRB'] = parseFloat(this.playerDataTeam1[item].ORB) + parseFloat(this.playerDataTeam1[item].DRB)
                }
                //console.log(this.playerDataTeam1)
                let updatePlayReport = {
                    id: id,
                    ergebnis1viertel: this.ergebnis1viertel,
                    ergebnis2viertel: this.ergebnis2viertel,
                    ergebnis3viertel: this.ergebnis3viertel,
                    ergebnis4viertel: this.ergebnis4viertel,
                    gesamtErgebnis: this.gesamtErgebnis,
                    attendance: this.attendance,
                    referee1: this.referee1,
                    referee2: this.referee2,
                    referee3: this.referee3,
                    playerDataTeam1: this.playerDataTeam1,
                    playerDataTeam2: this.playerDataTeam2
                }
                this.$store.dispatch('updatePlayReport', updatePlayReport)
            },
        },
        computed: {
            loadingCheck () {
                return this.$store.getters.loadingStatus
            },
            error () {
                return this.$store.getters.error
            },
            playReport () {
                return this.$store.getters.getSelectedPlayReport
            },
            teams () {
                return this.$store.getters.getAllTeams
            },
            player () {
                return this.$store.getters.getAllPersons
            },
        },
        created () {
            const teamName1 = this.teams.find(team => team.id == this.playReport.data.team1)
            const teamName2 = this.teams.find(team => team.id == this.playReport.data.team2)
            this.teamNames = [ teamName1.data.name , teamName2.data.name ] 
            const playerNames1 = this.player.filter(player => player.data.teamID == this.playReport.data.team1)
            const playerNames2 = this.player.filter(player => player.data.teamID == this.playReport.data.team2)
            this.playerTeam1 = playerNames1
            this.playerTeam2 = playerNames2

            let playerDataTeam1 = {}
            playerNames1.map((item, index) => {
                playerDataTeam1[item.id] =  {MP:null, FG:null, FGA: null, ThreeP: null, ThreePA: null, FT: null, FTA: null, 
                ORB:null, DRB: null, AST: null, STL: null, BLK: null, TOV: null, PF: null, PTS: null, plusMinus: null}
            })
            this.playerDataTeam1 = playerDataTeam1

            let playerDataTeam2 = {}
            playerNames2.map((item, index) => {
                playerDataTeam2[item.id] =  {MP:null, FG:null, FGA: null, ThreeP: null, ThreePA: null, FT: null, FTA: null, 
                ORB:null, DRB: null, AST: null, STL: null, BLK: null, TOV: null, PF: null, PTS: null, plusMinus: null}
            })
            this.playerDataTeam2 = playerDataTeam2
        }
    }
</script>
        