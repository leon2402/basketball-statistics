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
                                        <tr><h3>Spielplan</h3></tr>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout wrap>
                                        <v-tabs centered>
                                            <v-tab>Oktober</v-tab>
                                                <v-tab-item>
                                                    <v-data-table class="datatable"
                                                        :headers="gameplan"
                                                        :items="gamesoctober"
                                                        :items-per-page="500"
                                                        hide-default-footer
                                                        dense>
                                                    </v-data-table>
                                                </v-tab-item>
                                            <v-tab>November</v-tab>
                                                <v-tab-item>
                                                    <v-data-table class="datatable"
                                                        :headers="gameplan"
                                                        :items="gamesnovember"
                                                        :items-per-page="500"
                                                        hide-default-footer
                                                        dense>
                                                    </v-data-table>
                                                </v-tab-item>
                                            <v-tab>Dezember</v-tab>
                                                <v-tab-item>
                                                    <v-data-table class="datatable"
                                                        :headers="gameplan"
                                                        :items="gamesdecember"
                                                        :items-per-page="500"
                                                        hide-default-footer
                                                        dense>
                                                    </v-data-table>
                                                </v-tab-item>
                                            <v-tab>Januar</v-tab>
                                                <v-tab-item>
                                                    <v-data-table class="datatable"
                                                        :headers="gameplan"
                                                        :items="gamesjanuary"
                                                        :items-per-page="500"
                                                        hide-default-footer
                                                        dense>
                                                    </v-data-table>
                                                </v-tab-item>
                                            <v-tab>Februar</v-tab>
                                                <v-tab-item>
                                                    <v-data-table class="datatable"
                                                        :headers="gameplan"
                                                        :items="gamesfebruary"
                                                        :items-per-page="500"
                                                        hide-default-footer
                                                        dense>
                                                    </v-data-table>
                                                </v-tab-item>
                                            <v-tab>März</v-tab>
                                                <v-tab-item>
                                                    <v-data-table class="datatable"
                                                        :headers="gameplan"
                                                        :items="gamesmarch"
                                                        :items-per-page="500"
                                                        hide-default-footer
                                                        dense>
                                                    </v-data-table>
                                                </v-tab-item>
                                            <v-tab>April</v-tab>
                                                <v-tab-item>
                                                    <v-data-table class="datatable"
                                                        :headers="gameplan"
                                                        :items="gamesapril"
                                                        :items-per-page="500"
                                                        hide-default-footer
                                                        dense>
                                                    </v-data-table>
                                                </v-tab-item>
                                        </v-tabs>
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
        gameplan: [
            {
                text: 'Datum',
                sortable: true,
                value: 'date',
                align: 'center',
                width: '150'
            },
            {
                text: 'Heimteam',
                sortable: false,
                value: 'hometeam',
                align: 'center',
            },
            {
                text: 'Ergebnis',
                sortable: false,
                value: 'result',
                align: 'center',
                width: '75'
            },
            {
                text: 'Auswärtsteam',
                sortable: true,
                value: 'awayteam',
                align: 'center',
            },
            {
                text: 'Zuschauer',
                sortable: true,
                value: 'attendance',
                align: 'center',
                width: '95'
            },
        ],
        gamesoctober: [
            {
                date: '31.10.2019 18:00',
                hometeam: 'Dallas Mavericks',
                result: '110:113',
                awayteam: 'Golden State Warriors',
                attendance: '15.870'
            }
        ],
        gamesnovember: [
            {
                date: '31.10.2019 18:00',
                hometeam: 'Dallas Mavericks',
                result: '110:113',
                awayteam: 'Golden State Warriors',
                attendance: '15.870'
            },
            {
                date: '31.10.2019 18:00',
                hometeam: 'Dallas Mavericks',
                result: '110:113',
                awayteam: 'Golden State Warriors',
                attendance: '15.870'
            }
        ],
      }
    }
    }
</script>
