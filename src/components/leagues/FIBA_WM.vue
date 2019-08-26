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
                                    <tr><h3>2019 FIBA Basketball World Cup</h3></tr>
                                    </v-flex>
                                </v-layout>
                                <v-tabs centered>
                                    <v-tab>1.Runde</v-tab>
                                        <v-tab-item class="background">
                                            <v-layout wrap>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopwestern">
                                                                <tr><h3>Gruppe A</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="groupa"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft" @click="viewTeam(props.item)"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopeastern">
                                                                <tr><h3>Gruppe B</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="groupb"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout wrap>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopwestern">
                                                                <tr><h3>Gruppe C</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="groupc"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopeastern">
                                                                <tr><h3>Gruppe D</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="groupd"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout wrap>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopwestern">
                                                                <tr><h3>Gruppe E</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="groupe"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopeastern">
                                                                <tr><h3>Gruppe F</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="groupf"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout wrap>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopwestern">
                                                                <tr><h3>Gruppe G</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="groupg"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                                <v-flex xs12 md6>
                                                    <v-container>
                                                        <v-layout>
                                                            <v-flex xs12 md12 class="headertopeastern">
                                                                <tr><h3>Gruppe H</h3></tr>
                                                            </v-flex>
                                                        </v-layout>
                                                        <v-layout>
                                                            <v-data-table class="datatable"
                                                            :headers="headerconference"
                                                            :items="grouph"
                                                            :items-per-page="15"
                                                            sort-by="pkt"
                                                            sort-desc
                                                            hide-default-footer
                                                            dense>
                                                            <template v-slot:item="props">
                                                                <tr>
                                                                    <td class="teamnameleft"> <img :src="props.item.imageLink" 
                                                                            height="12px"
                                                                            width="23px">
                                                                            &nbsp;&nbsp;{{props.item.teamName}} </td>
                                                                    <td align="center"> {{props.item.win}} </td>
                                                                    <td align="center"> {{props.item.loses}} </td>
                                                                    <td align="center"> {{props.item.pkt}} </td>
                                                                    <td align="center"> {{props.item.gamesPlayed}} </td>
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout>
                                                <v-tabs centered>
                                                    <v-tab>Gruppe G</v-tab>
                                                    <v-tab-item>
                                                        <v-flex xs12 md12 class="test">
                                                            <v-data-table
                                                            :headers="gameday"
                                                            :items="gamesg"
                                                            :items-per-page="15"
                                                            sort-by="date"
                                                            hide-default-footer
                                                            >
                                                            <template v-slot:item="props">
                                                                <tr @click="viewPlayReport(props.item)">
                                                                    <td class="text-center"> {{props.item.date}} </td>
                                                                    <td class="text-center"> {{props.item.hometeam}} </td>
                                                                    <td class="text-center"> {{props.item.result}} </td>
                                                                    <td class="text-center"> {{props.item.awayteam}} </td>        
                                                                </tr>
                                                            </template>
                                                            </v-data-table>
                                                        </v-flex>
                                                    </v-tab-item>
                                                    <v-tab>Gruppe C</v-tab>
                                                    <v-tab-item>
                                                        <v-flex xs12 md12 class="test">
                                                            <v-data-table
                                                            :headers="gameday"
                                                            :items="gamesg"
                                                            :items-per-page="15"
                                                            sort-by="date"
                                                            hide-default-footer>
                                                            </v-data-table>
                                                            <template v-slot:item="props">
                                                                <tr @click="viewPlayReport(props.item)">
                                                                    <td class="text-center"> {{props.item.date}} </td>
                                                                    <td class="text-center"> {{props.item.hometeam}} </td>
                                                                    <td class="text-center"> {{props.item.result}} </td>
                                                                    <td class="text-center"> {{props.item.awayteam}} </td>        
                                                                </tr>
                                                            </template>
                                                        </v-flex>
                                                    </v-tab-item>
                                                </v-tabs>
                                            </v-layout>
                                        </v-tab-item>
                                    </v-tabs>
                                </v-container>
                            </v-flex>
                            <v-flex xs12 md2 class="background">
                                <v-container fluid>
                                    <v-layout>
                                        <v-flex xs12 md12 class="header2">
                                            <tr><h3>Logo</h3></tr>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout>
                                        <v-img
                                            src="https://firebasestorage.googleapis.com/v0/b/basketball-stats-c2061.appspot.com/o/Wettbewerbe%2FFIBA2019WorldCup.png?alt=media&token=08715948-7cdf-4a66-8463-1c48c244014f"
                                            max-height="200px"
                                            contain>
                                        </v-img>
                                    </v-layout>
                                <v-layout>
                                    <v-flex xs12 md12 class="headertop">
                                    <tr><h3>News</h3></tr>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md12 class="background">
                                        <v-card max-width="285" max-height="100" class="newscard" v-for="news in NBANews" :key="news.id" @click="viewNews(news.data, news.id)">
                                            <v-layout align-center>
                                            <v-flex xs4 md4>
                                                <v-img
                                                    :src="news.data.imageLink"
                                                    max-width="200px"
                                                    contain
                                                    class="newscardpicture"
                                                    >
                                                    </v-img>
                                            </v-flex>
                                            <v-flex xs8 md8>
                                                <v-card-text>
                                                <div>
                                                <div class="news">
                                                    {{news.data.title}}</div>
                                                </div>
                                            </v-card-text>
                                            </v-flex>
                                            </v-layout>
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
import { type } from 'os';
  export default {
    components: {
      Header,
      Footer
    },
    data () {
      return{
        headerconference: [
            {
                text:'Team',
                sortable: true,
                value: 'imageLink'+'teamName',
                align: 'center',
                width: '260'
            },
            {
                text:'W',
                sortable: true,
                value: 'win',
                align: 'center',
            },
            {
                text:'L',
                sortable: true,
                value: 'loses',
                align: 'center',
            },
            {
                text:'PKT',
                sortable: true,
                value: 'pkt',
                align: 'center',
            },
            {
                text:'GP',
                sortable: true,
                value: 'gamesPlayed',
                align: 'center',
            }
        ],
        gameday: [
            {
                text: 'Datum',
                sortable: true,
                value: 'date',
                align: 'center',
                width: '150',
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
        groupa: null,
        groupb: null,
        groupc: null,
        groupd: null,
        groupe: null,
        groupf: null,
        groupg: null,
        grouph: null,
        show: false,
      }
    },
    methods: {
        viewNews (newsData, id) {
            this.$store.dispatch('selectNews', id)
            this.$router.push('/news/' + newsData.title + '/' + id)
        },

        viewTeam (item) {
            this.$store.dispatch('selectTeam', item.teamID)
            this.$router.push('/team/' + item.teamName)
        },
        viewPlayReport (item) {
            //consolconsole.log(item)
            this.$store.dispatch('selectPlayReport', item.playreportID)
            this.$router.push('/gamereport/'+ item.playreportID)
        }
    },
    computed: {
        allPlayReports () {
            return this.$store.getters.getAllPlayReports
        },
        allTeams () {
            return this.$store.getters.getAllTeams
        },
        allNews () {
            return this.$store.getters.getAllNews
        },
        unfinishedPlayReports () {
            return this.$store.getters.getUnfinishedPlayReports
        }
    },
    created () {
        let groupa = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'A') { 
                groupa.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.groupa = groupa

        let groupb = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'B') { 
                groupb.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.groupb = groupb

        let groupc = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'C') { 
                groupc.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.groupc = groupc

        let groupd = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'D') { 
                groupd.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.groupd = groupd

        let groupe = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'E') { 
                groupe.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.groupe = groupe

        let groupf = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'F') { 
                groupf.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.groupf = groupf

        let groupg = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'G') { 
                groupg.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.groupg = groupg

        let grouph = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1) {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2) {
                    if(item.data.gesamtErgebnis.slice(0,colon) < item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                }
            })
            const pkt = (win*2)+(loss*1)
            const gamesPlayed = win + loss
            /*const pct = parseFloat(win)/parseFloat(gamesPlayed)*/
            if(team.data.group1 === 'H') { 
                grouph.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.grouph = grouph

        let gamesg = []
        this.unfinishedPlayReports.map((playreport, index) => {
            if(playreport.data.spieltag == 'G') {
                const date = playreport.data.date.toDate()
                let dd = date.getDate(); 
                let mm = date.getMonth() + 1; 
                const yyyy = date.getFullYear(); 
                if (dd < 10) { 
                    dd = '0' + dd; 
                } 
                if (mm < 10) { 
                    mm = '0' + mm; 
                } 
                const formattedDate = dd + '.' + mm + '.' + yyyy; 
                const homeTeam = this.allTeams.find(team => team.id === playreport.data.team1)
                const awayTeam = this.allTeams.find(team => team.id === playreport.data.team2)
                //console.log(homeTeam)
                gamesg.push({playreportID: playreport.id, date: formattedDate, hometeam:homeTeam.data.name, result: "0:0",  awayteam:awayTeam.data.name})
            }
        })
        this.allPlayReports.map((playreport, index) => {
            if(playreport.data.spieltag == 'G') {
                const date = playreport.data.date.toDate()
                let dd = date.getDate(); 
                let mm = date.getMonth() + 1; 
                const yyyy = date.getFullYear(); 
                if (dd < 10) { 
                    dd = '0' + dd; 
                } 
                if (mm < 10) { 
                    mm = '0' + mm; 
                } 
                const formattedDate = dd + '.' + mm + '.' + yyyy; 
                const homeTeam = this.allTeams.find(team => team.id === playreport.data.team1)
                const awayTeam = this.allTeams.find(team => team.id === playreport.data.team2)
                //console.log(homeTeam)
                gamesg.push({playreportID: playreport.id,date: formattedDate, hometeam:homeTeam.data.name, result: playreport.data.gesamtErgebnis,  awayteam:awayTeam.data.name})
            }
        })

        this.gamesg = gamesg

        const NBANews = this.allNews.filter(news => news.data.NBA == '1')
        this.NBANews = NBANews
    },
}
</script>

<style>  
    .v-data-table .teamnameleft {
        padding: 5px 8px 4px;
        border-right: 0px;
    }
</style>