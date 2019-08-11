<template>
    <v-app>
        <Header />
            <v-content>
                <v-container justify-center>
                        <v-layout justify-center wrap>
                            <v-flex xs12 md6 class="background">
                                <v-container fluid>
                                <v-layout>
                                    <v-flex xs12 md12 class="header">
                                    <tr><h3>NBA</h3></tr>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md6 class="headertopwestern">
                                    <tr><h3>Western Conference</h3></tr>
                                    </v-flex>
                                    <v-flex xs12 md6 class="headertopeastern">
                                    <tr><h3>Eastern Conference</h3></tr>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md6>
                                    <v-data-table class="datatablewestern"
                                        :headers="conferenceheaderwest"
                                        :items="western"
                                        :items-per-page="15"
                                        hide-default-footer
                                        dense
                                        calculate-widths>
                                    </v-data-table>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                    <v-data-table class="datatableeastern"
                                        :headers="conferenceheadereast"
                                        :items="eastern"
                                        :items-per-page="15"
                                        hide-default-footer
                                        dense>
                                    </v-data-table>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md12 class="test">
                                        <v-data-table
                                        :headers="gameday"
                                        :items="games"
                                        :items-per-page="15"
                                        hide-default-footer>
                                    </v-data-table>
                                    </v-flex>
                                </v-layout>
                                </v-container>
                            </v-flex>
                            <v-flex xs12 md2 class="background">
                                <v-container fluid>
                                <v-layout>
                                    <v-flex xs12 md12 class="header2">
                                    <tr><h3>News</h3></tr>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md12>
                                    <v-card>
                                        <v-card-Text>Doncic Rookie of the Year</v-card-text>
                                    </v-card>
                                    </v-flex>
                                </v-layout>
                                <v-layout> 
                                    <v-flex xs12 md12>
                                    <v-card>
                                        <v-card-Text>Rookie of the Month</v-card-text>
                                    </v-card>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md12>
                                    <v-card>
                                        <v-card-Text>Erstes Trible Double für Doncic</v-card-text>
                                    </v-card>
                                    </v-flex>
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
      return{
        conferenceheaderwest: [
            {
                text: '#',
                sortable: true,
                value: 'position',
                align: 'center',
                width: '30'
            },
            {
                text: 'Team',
                sortable: true,
                value: 'westernteam',
                align: 'left',
            },
            {
                text: 'W',
                sortable: true,
                value: 'win',
                align: 'center',
                width: '30'
            },
            {
                text: 'L',
                sortable: true,
                value: 'loses',
                align: 'center',
                width: '30'
            },
            {
                text: '%',
                sortable: true,
                value: 'percentwinlose',
                align: 'center',
                width: '50'
            },
        ],
        conferenceheadereast: [
            {
                text: '#',
                sortable: true,
                value: 'position',
                align: 'center',
                width: '30'
            },
            {
                text: 'Team',
                sortable: true,
                value: 'easternteam',
                align: 'left'
            },
            {
                text: 'W',
                sortable: true,
                value: 'win',
                align: 'center',
                width: '30'
            },
            {
                text: 'L',
                sortable: true,
                value: 'loses',
                align: 'center',
                width: '30'
            },
            {
                text: '%',
                sortable: true,
                value: 'percentwinlose',
                align: 'center',
                width: '50'
            },
        ],
        gameday: [
            {
                text: 'Datum',
                sortable: true,
                value: 'date',
                align: 'center',
                width: '150'
            },
            {
                text: 'Heimteam',
                sortable: true,
                value: 'hometeam',
                align: 'center',
            },
            {
                text: 'Erg.',
                sortable: true,
                value: 'result',
                align: 'center',
                width: '70'
            },
            {
                text: 'Auswärtsteam',
                sortable: true,
                value: 'awayteam',
                align: 'center',
            },
        ],
        western: [
            {
                position: 1,
                westernteam: 'Dallas Mavericks',
                win: 30,
                loses: 15,
                percentwinlose: 0.667
            },
            {
                position: 2,
                westernteam: 'Golden State Warriors',
                win: 32,
                loses: 17,
                percentwinlose: 0.653
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            },
            {
                westernteam: 'Dallas Mavericks'
            }
        ],
        eastern: [
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
            {
                easternteam: 'New York Knicks'
            },
        ],
        games: [
            {
                date: '31.10.2019 18:00',
                hometeam: 'Dallas Mavericks',
                result: '110:113',
                awayteam: 'Golden State Warriors'
            },
            {
                date: '31.10.2019 22:30',
                hometeam: 'New York Knicks',
                result: '- : -',
                awayteam: 'Boston Celtics'
            }
        ]
      }
    }}
</script>

<style>
    .datatablewestern {
        width: 99%
    }
    .datatablewestern thead {
    background: #e9e9e9;
  }
    .datatablewestern th {
        color: black;
        border: 1px solid #ddd;
    } 
    .datatablewestern td {
        color: black;
        border: 1px solid #ddd;
    }    
    .datatableeastern {
        width: 99%;
        margin-left: 1%
    }
    .datatableeastern thead {
    background: #e9e9e9;
  }
    .datatableeastern th {
        color: black;
        border: 1px solid #ddd;
    } 
    .datatableeastern td {
        color: black;
        border: 1px solid #ddd;
    }
    .headertopwestern {
    display: block;
    font-family: "Oswald", sans-serif;
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;
    border: 0;
    margin: 0;
    position: relative;
    background-color: #17408B;
    padding: 5px 8px 4px;
    border: 2px solid #ddd;
    margin-top: 10px;
    }
    .headertopeastern {
    display: block;
    font-family: "Oswald", sans-serif;
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;
    border: 0;
    margin: 0;
    position: relative;
    background-color: #17408B;
    padding: 5px 8px 4px;
    border: 2px solid #ddd;
    margin-top: 10px;
    margin-left: 1%
    }
    .test {
        margin-top: 10px;
    }
</style>