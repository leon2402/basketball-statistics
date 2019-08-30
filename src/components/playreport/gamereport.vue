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
                                            contain
                                            @click="viewTeam(homeTeam)"
                                            >
                                        </v-img>
                                    </v-layout>
                                    <v-layout justify-center>
                                        <v-btn text x-small class="btnfibawmgamereportnation"><h3 @click="viewTeam(homeTeam)">{{homeTeam.data.name}}</h3></v-btn>
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
                                        {{playReport.data.arenas}}&nbsp;&nbsp;|&nbsp;&nbsp;<b>{{playReport.data.attendance}}</b>
                                    </v-layout>
                                    <v-layout justify-center class="spieldaten" v-else>
                                        {{playReport.data.arenas}}&nbsp;&nbsp;|&nbsp;&nbsp;<b>-</b>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 md3>
                                    <v-layout>
                                        <v-img
                                            :src="awayTeam.data.imageLink"
                                            max-height=200px
                                            contain
                                            @click="viewTeam(awayTeam)"
                                            >
                                        </v-img>
                                    </v-layout>
                                    <v-layout justify-center>
                                        <v-btn text x-small class="btnfibawmgamereportnation"> <h3 @click="viewTeam(awayTeam)">{{awayTeam.data.name}} </h3></v-btn>
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
                                                <template v-slot:item="props">
                                                    <tr>
                                                        <td class="teamnameleft" @click="onLoadPlayer(props.item)"> <v-btn text x-small class="btnfibawmgamereportplayer"> {{props.item.name}} </v-btn> </td>
                                                        <td align="center"> {{props.item.MP}} </td>
                                                        <td align="center"> {{props.item.FG}} </td>
                                                        <td align="center"> {{props.item.FGA}} </td>
                                                        <td align="center"> {{props.item.FGP}} </td>
                                                        <td align="center"> {{props.item.ThreeP}} </td>
                                                        <td align="center"> {{props.item.ThreePA}} </td>
                                                        <td align="center"> {{props.item.ThreePO}} </td>
                                                        <td align="center"> {{props.item.FT}} </td>
                                                        <td align="center"> {{props.item.FTA}} </td>
                                                        <td align="center"> {{props.item.FTP}} </td>
                                                        <td align="center"> {{props.item.ORB}} </td>
                                                        <td align="center"> {{props.item.DRB}} </td>
                                                        <td align="center"> {{props.item.TRB}} </td>
                                                        <td align="center"> {{props.item.AST}} </td>
                                                        <td align="center"> {{props.item.STL}} </td>
                                                        <td align="center"> {{props.item.BLK}} </td>
                                                        <td align="center"> {{props.item.TOV}} </td>
                                                        <td align="center"> {{props.item.PF}} </td>
                                                        <td align="center"> {{props.item.PTS}} </td>
                                                        <td align="center"> {{props.item.plusMinus}} </td>
                                                    </tr>
                                                </template>
                                            </v-data-table>
                                        </v-tab-item>
                                    <v-tab>{{ awayTeam.data.name }}</v-tab>
                                        <v-tab-item>
                                            <v-data-table class="datatable"
                                                :headers="boxscore"
                                                :items="dataTeam2"
                                                :items-per-page="20"
                                                hide-default-footer>
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
                        value: 'FG',
                        align: 'center',
                    },
                    {
                        text: 'FGA',
                        sortable: false,
                        value: 'FGA',
                        align: 'center',
                    },
                    {
                        text: 'FG%',
                        sortable: false,
                        value: 'FGP',
                        align: 'center',
                    },
                    {
                        text: '3P',
                        sortable: false,
                        value: 'ThreeP',
                        align: 'center',
                    },
                    {
                        text: '3PA',
                        sortable: false,
                        value: 'ThreePA',
                        align: 'center',
                    },
                    {
                        text: '3P%',
                        sortable: false,
                        value: 'ThreePO',
                        align: 'center',
                    },
                    {
                        text: 'FT',
                        sortable: false,
                        value: 'FT',
                        align: 'center',
                    },
                    {
                        text: 'FTA',
                        sortable: false,
                        value: 'FTA',
                        align: 'center',
                    },
                    {
                        text: 'FT%',
                        sortable: false,
                        value: 'FTP',
                        align: 'center',
                    },
                    {
                        text: 'ORB',
                        sortable: false,
                        value: 'ORB',
                        align: 'center',
                    },
                    {
                        text: 'DRB',
                        sortable: false,
                        value: 'DRB',
                        align: 'center',
                    },
                    {
                        text: 'TRB',
                        sortable: false,
                        value: 'TRB',
                        align: 'center',
                    },
                    {
                        text: 'AST',
                        sortable: false,
                        value: 'AST',
                        align: 'center',
                    },
                    {
                        text: 'STL',
                        sortable: false,
                        value: 'STL',
                        align: 'center',
                    },
                    {
                        text: 'BLK',
                        sortable: false,
                        value: 'BLK',
                        align: 'center',
                    },
                    {
                        text: 'TOV',
                        sortable: false,
                        value: 'TOV',
                        align: 'center',
                    },
                    {
                        text: 'PF',
                        sortable: false,
                        value: 'PF',
                        align: 'center',
                    },
                    {
                        text: 'PTS',
                        sortable: false,
                        value: 'PTS',
                        align: 'center',
                    },
                    {
                        text: '+/-',
                        sortable: false,
                        value: 'plusMinus',
                        align: 'center',
                    },
                ],
            }
        },
        methods: {
            onLoadPlayer (item) {
                this.$store.dispatch('selectPerson', item.id)
                this.$router.push('/player/' + item.name + '/' + item.id)
            },
            viewTeam (teamData) {
                this.$store.dispatch('selectTeam', teamData.id)
                this.$router.push('/team/' + teamData.data.name)
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
            const leerzeichen = ' '
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
                const data = {name: player.data.firstname+leerzeichen+player.data.name}
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
    .btnfibawmgamereportnation {
        text-transform: inherit;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif
    }
    .btnfibawmgamereportplayer {
        text-transform: inherit;
        font-size: 14px;
        font-family: Arial
    }
</style>