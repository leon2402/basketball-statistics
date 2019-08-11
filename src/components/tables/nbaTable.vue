<template>
        <v-app>
        <Header />
        <v-content>
            <v-flex xs12 md12>
                  <v-data-table class="datatable"
                    :headers="headers"
                    :items="teams"
                    sort-by="pct"
                    sort-desc
                    hide-default-footer>
                  </v-data-table>
                </v-flex>
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
import Header from '../shared/Header.vue'
import Footer from '../shared/Footer.vue'

export default {
    name: 'NBATable',
    components: {
            Header,
            Footer
    },
    data () {
        return {
            teams: null,
            headers: [
            {
                text: 'Team',
                sortable: true,
                value: 'teamName',
                align: 'center',
            },
            {
                text: 'Wins',
                sortable: true,
                value: 'wins',
                align: 'center',
            },
            {
                text: 'Loses',
                sortable: true,
                value: 'loses',
                align: 'center',
            },
            {
                text: 'PCT',
                sortable: true,
                value: 'pct',
                align: 'center',
            },
            {
                text: 'GP',
                sortable: true,
                value: 'gamesPlayed',
                align: 'center',
            },
            ],
        }
    },
    computed: {
        allPlayReports () {
            return this.$store.getters.getAllPlayReports
        },
        allTeams () {
            return this.$store.getters.getAllTeams
        },
    },
    created () {
        let teams = []
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
            const gamesPlayed = win + loss
            const pct = parseFloat(win)/parseFloat(gamesPlayed)
            teams.push({teamID: team.id, teamName:team.data.name, wins:win, loses:loss, gamesPlayed:gamesPlayed, pct:pct})
        })
        
        this.teams = teams
    }
}
</script>