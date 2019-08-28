<template>
    <v-app>
        <Header />
            <v-content class="mainbackground">
                <v-container>
                    <v-layout justify-center wrap>
                        <v-flex xs12 md8 class="background">
                            <v-container class="background">
                            <v-layout>
                                <v-flex xs12 md12 class="header">
                                    <tr><h3>Gameinfo</h3></tr>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center justify-center wrap>
                                <v-flex xs12 md3>
                                    <v-layout>
                                        <v-img
                                            :src="homeTeam.data.imageLink"
                                            max-height=200px
                                            contain>
                                        </v-img>
                                    </v-layout>
                                    <v-layout justify-center>
                                        <h3>{{homeTeam.data.name}}</h3>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-layout justify-center class="ergebnis" v-if="playReport.data.gesamtErgebnis">
                                        {{playReport.data.gesamtErgebnis}}
                                    </v-layout>
                                    <v-layout justify-center class="ergebnis" v-else>
                                        - : -
                                    </v-layout>
                                    <v-layout justify-center class="spieldaten">
                                        <b>{{playReport.data.date.toDate()}}</b>
                                    </v-layout>
                                    <v-layout justify-center class="spieldaten" v-if="playReport.data.attendance">
                                        American Airline Center&nbsp;&nbsp;|&nbsp;&nbsp;<b>{{playReport.data.attendance}}</b>
                                    </v-layout>
                                    <v-layout justify-center class="spieldaten" v-else>
                                        American Airline Center&nbsp;&nbsp;|&nbsp;&nbsp;<b>-</b>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 md3>
                                    <v-layout>
                                        <v-img
                                            :src="awayTeam.data.imageLink"
                                            max-height=200px
                                            contain>
                                        </v-img>
                                    </v-layout>
                                    <v-layout justify-center>
                                        <h3>{{awayTeam.data.name}}</h3>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center wrap>
                        <v-flex xs12 md8 class="background">
                            <v-container>
                            <v-layout>
                                <v-flex xs12 md12 class="headertop">
                                    <tr><h3>Boxscore</h3></tr>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-tabs centered>
                                    <v-tab>{{homeTeam.data.name}}</v-tab>
                                        <v-tab-item>
                                            <v-data-table class="datatable"
                                                :headers="boxscore"
                                                :items="dataTeam1"
                                                :items-per-page="20"
                                                hide-default-footer>
                                            </v-data-table>
                                        </v-tab-item>
                                    <v-tab>{{ awayTeam.data.name }}</v-tab>
                                        <v-tab-item>
                                            <v-data-table class="datatable"
                                                :headers="boxscore"
                                                :items="dataTeam2"
                                                :items-per-page="20"
                                                hide-default-footer
                                                dense>
                                            </v-data-table>
                                        </v-tab-item>
                                </v-tabs>
                            </v-layout>
                            </v-container>
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
                homeTeam: null,
                awayTeam: null,
                dataTeam1: [],
                dataTeam2: [],
                boxscore: [
                    {
                        text: 'Spieler',
                        sortable: false,
                        value: 'name',
                        align: 'left',
                        width: '175'
                    },
                    {
                        text: 'MP',
                        sortable: false,
                        value: 'MP',
                        align: 'center',
                    },
                    {
                        text: 'FG',
                        sortable: false,
                        value: 'fg',
                        align: 'center',
                    },
                    {
                        text: 'FGA',
                        sortable: false,
                        value: 'fga',
                        align: 'center',
                    },
                    {
                        text: 'FG%',
                        sortable: false,
                        value: 'fgp',
                        align: 'center',
                    },
                    {
                        text: '3P',
                        sortable: false,
                        value: 'tp',
                        align: 'center',
                    },
                    {
                        text: '3PA',
                        sortable: false,
                        value: 'tpa',
                        align: 'center',
                    },
                    {
                        text: '3P%',
                        sortable: false,
                        value: 'tpp',
                        align: 'center',
                    },
                    {
                        text: 'FT',
                        sortable: false,
                        value: 'ft',
                        align: 'center',
                    },
                    {
                        text: 'FTA',
                        sortable: false,
                        value: 'fta',
                        align: 'center',
                    },
                    {
                        text: 'FT%',
                        sortable: false,
                        value: 'ftp',
                        align: 'center',
                    },
                    {
                        text: 'ORB',
                        sortable: false,
                        value: 'orb',
                        align: 'center',
                    },
                    {
                        text: 'DRB',
                        sortable: false,
                        value: 'drb',
                        align: 'center',
                    },
                    {
                        text: 'TRB',
                        sortable: false,
                        value: 'trb',
                        align: 'center',
                    },
                    {
                        text: 'AST',
                        sortable: false,
                        value: 'ast',
                        align: 'center',
                    },
                    {
                        text: 'STL',
                        sortable: false,
                        value: 'stl',
                        align: 'center',
                    },
                    {
                        text: 'BLK',
                        sortable: false,
                        value: 'blk',
                        align: 'center',
                    },
                    {
                        text: 'TOV',
                        sortable: false,
                        value: 'tov',
                        align: 'center',
                    },
                    {
                        text: 'PF',
                        sortable: false,
                        value: 'pf',
                        align: 'center',
                    },
                    {
                        text: 'PTS',
                        sortable: false,
                        value: 'pts',
                        align: 'center',
                    },
                    {
                        text: '+/-',
                        sortable: false,
                        value: 'pn',
                        align: 'center',
                    },
                ],
            }
        },
        computed: {
            playReport () {
                return this.$store.getters.getSelectedPlayReport
            },
            teams () {
                return this.$store.getters.getAllTeams
            },
            players () {
                const allplayer = this.$store.getters.getAllPersons.filter(item => item.data.role == "player")
                return allplayer
            }
        },
        mounted () {
            this.homeTeam = this.teams.find(team => team.id === this.playReport.data.team1)
            this.awayTeam = this.teams.find(team => team.id === this.playReport.data.team2)

            for(let id in this.playReport.data.playerDataTeam1) {
                const player = this.players.find(player => player.id === id)
                const data = {name: player.data.name}
                data = Object.assign(data, this.playReport.data.playerDataTeam1[id])
                this.dataTeam1.push(data)
            }

            for(let id in this.playReport.data.playerDataTeam2) {
                const player = this.players.find(player => player.id === id)
                const data = {name: player.data.name}
                data = Object.assign(data, this.playReport.data.playerDataTeam2[id])
                this.dataTeam2.push(data)
            }
        }
    }
</script>

<style>
    .ergebnis {
        font-size: 50px;
    }
    .spieldaten {
        font-size: 14px;
    }
</style>