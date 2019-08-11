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
                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png"
                                            max-height=200px
                                            contain>
                                        </v-img>
                                    </v-layout>
                                    <v-layout justify-center>
                                        <h3>Dallas Mavericks</h3>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-layout justify-center class="ergebnis">
                                        110:113
                                    </v-layout>
                                    <v-layout justify-center class="spieldaten">
                                        <b>31.10.2019 18:00 Uhr</b>
                                    </v-layout>
                                    <v-layout justify-center class="spieldaten">
                                        American Airline Center&nbsp;&nbsp;|&nbsp;&nbsp;<b>15.870 Zuschauer</b>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 md3>
                                    <v-layout>
                                        <v-img
                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1024px-Golden_State_Warriors_logo.svg.png"
                                            max-height=200px
                                            contain>
                                        </v-img>
                                    </v-layout>
                                    <v-layout justify-center>
                                        <h3>Golden State Warriors</h3>
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
                                    <v-tab>Dallas Mavericks</v-tab>
                                        <v-tab-item>
                                            <v-data-table class="datatable"
                                                :headers="boxscore"
                                                :items="boxscoreteam1"
                                                :items-per-page="20"
                                                hide-default-footer>
                                            </v-data-table>
                                        </v-tab-item>
                                    <v-tab>Golden State Warriors</v-tab>
                                        <v-tab-item>
                                            <v-data-table class="datatable"
                                                :headers="boxscore"
                                                :items="boxscoreteam2"
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
                        value: 'mp',
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
                boxscoreteam1: [
                    {
                        name: 'Dirk Nowitzki',
                        mp: '25:35',
                        fg: 5,
                        fga: 15,
                        fgp: 0.333,
                        tp: 1,
                        tpa: 4,
                        tpp: 0.25,
                        ft: 5,
                        fta: 5,
                        ftp: 1,
                        orb: 0,
                        drb: 3,
                        trb: 3,
                        ast: 2,
                        stl: 0,
                        blk: 0,
                        tov: 1,
                        pf: 3,
                        pts: 16,
                        pn: -5,
                    }
                ]
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