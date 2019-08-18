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
                                                :items="western"
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
                                                :items="eastern"
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
        ],
        western: null,
        eastern: null,
        show: false,
      }
    },
    methods: {
        viewNews (newsData, id) {
            this.$store.dispatch('selectNews', id)
            this.$router.push('/news/' + newsData.title + '/' + id)
        },
        viewTeam (id, teamData) {
            this.$store.dispatch('selectTeam', id)
            this.$router.push('/team/' + teamData.name)
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
    },
    created () {
        let western = []
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
                western.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.western = western

        let eastern = []
        this.allTeams.map((team, index) => {
            let win = 0
            let loss = 0
            this.allPlayReports.map((item, i) => {
                const colon = item.data.gesamtErgebnis.search(/:/)
                if(team.id == item.data.team1 && team.data.conference == 'Eastern') {
                    if(item.data.gesamtErgebnis.slice(0,colon) > item.data.gesamtErgebnis.slice(colon+1)){
                        win += 1
                    } else {
                        loss += 1
                    }
                } else if(team.id == item.data.team2 && team.data.conference == 'Eastern') {
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
                eastern.push({teamID: team.id, imageLink:team.data.imageLink, teamName:team.data.name, win:win, loses:loss, gamesPlayed:gamesPlayed, pkt:pkt})}
        })
        
        this.eastern = eastern

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