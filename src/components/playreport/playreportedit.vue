<template>
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
                <v-data-table
                    :headers="headers"
                    :items="test"
                ></v-data-table>
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
                            Play Report fertigstellen
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
                headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
      ],
                test: [
                    {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
                ],
            }
        },
        methods: {
            createPlayReport () {
                
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
            }
        },
        created () {
            const teamName1 = this.teams.find(team => team.id == this.playReport.data.team1)
            const teamName2 = this.teams.find(team => team.id == this.playReport.data.team2)
            this.teamNames = [ teamName1.data.name , teamName2.data.name ] 
            const playerNames1 = this.player.filter(player => player.data.teamID == this.playReport.data.team1)
            const playerNames2 = this.player.filter(player => player.data.teamID == this.playReport.data.team2)
            this.playerTeam1 = playerNames1
            this.playerTeam2 = playerNames2
        }
    }
</script>
        