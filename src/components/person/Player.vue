<template>
  <v-app>
    <Header />
    <v-content>
      <v-container >
        <v-layout justify-center wrap>
          <v-flex xs12 md5 class="background">
            <v-container fluid>
              <v-layout>
                <v-flex xs12 md12 class="header">
                  <tr><h3>Spielerdaten</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout wrap>
                <v-flex xs12 md9 align-start class="information">
                  <table class="spielerdaten">
                  <tr><th>Name: </th><td>{{player.data.firstname}} {{player.data.name}}</td></tr>
                  <tr><th>Geburtstag: </th><td>{{player.data.birth}} in {{player.data.birthplace}}</td></tr>
                  <tr><th>Größe: </th><td>{{player.data.height}}cm</td></tr>
                  <tr><th>Nationalität: </th><td>{{player.data.nation}}</td></tr>
                  <tr><th>1.Position: </th><td>{{player.data.position1}}</td></tr>
                  <tr><th>2.Position: </th><td>{{player.data.position2}}</td></tr>
                  <tr><th>Draftpick: </th><td>Nr.: {{player.data.draftpick}}</td></tr>
                  <tr><th>Draftrunde: </th><td>{{player.data.draftround}}</td></tr>
                  <tr><th>Draftjahr: </th><td>{{player.data.draftyear}}</td></tr>
                  </table>
                </v-flex>
                <v-flex xs6 md3 align-start class="picture">
                  <v-img 
                    :src="player.data.imageLink"
                    aspect-ratio="0.8"
                    class="picture">
                  </v-img>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Erfolge</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout wrap>
                <v-flex xs12 md6 align-start class="information">
                  <table class="spielerdaten">
                    <tr><h2>NBA</h2></tr>
                    <tr></tr>
                    <tr><th>NBA Rookie of the Year </th><td>2019</td></tr>
                    <tr><th>NBA All-Rookie First Team </th><td>2019</td></tr>
                  </table>
                </v-flex>
                <v-flex xs12 md6 align-start class="information">
                  <table class="spielerdaten">
                    <tr><h2>Außerhalb der NBA</h2></tr>
                    <tr></tr>
                    <tr><th>EuroLeague Champion </th><td>2018</td></tr>
                    <tr><th>EuroLeague MVP </th><td>2018</td></tr>
                    <tr><th>Liga ACB champion </th><td>2015,2016,2018</td></tr>
                  </table>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Karriere-Stats</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12>
                  <v-data-table class="datatable"
                    :headers="headers2"
                    :items="random"
                    hide-default-footer>
                  </v-data-table>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 md3 class="background">
            <v-container fluid>
              <v-layout>
                <v-flex xs12 md12 class="header2">
                  <tr><h3>Aktuelles Team</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6 md6 align-self-center grow class="picture">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png"
                    min-height=230px
                    contain>
                  </v-img>
                </v-flex>
                <v-flex cs6 md6 class="information2">
                  <table class="teamdaten">
                    <tr><th>Teamname:</th></tr>
                    <tr>Dallas Mavericks</tr>
                    <tr><th>Ort:</th></tr>
                    <tr>Dallas, Texas</tr>
                    <tr><th>Gründung:</th></tr>
                    <tr>1980</tr>
                  </table>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Karriere</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6 md4 class="informationkarriere">
                  <table>
                    <tr>2015 - 2019</tr>
                    <tr>2019 - </tr>
                  </table>
                </v-flex>
                <v-flex xs6 md8 align-self-center grow class="informationkarriere">
                  <table>
                    <tr>
                      <th>Real Mardrid</th>
                      <td><v-img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Real_Madrid_Baloncesto_logo.svg/1024px-Real_Madrid_Baloncesto_logo.svg.png"
                        max-height=18px
                        max-width=30px
                        contain>
                      </v-img></td>
                    </tr>
                    <tr>
                      <th>Dallas Mavericks</th>
                      <td><v-img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png"
                        max-height=18px
                        max-width=30px
                        contain>
                      </v-img></td>
                    </tr>
                  </table>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>News</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6 md12>
                  <v-card>
                    <v-card-Text>Doncic Rookie of the Year</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout> 
                <v-flex xs6 md12>
                  <v-card>
                    <v-card-Text>Rookie of the Month</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6 md12>
                  <v-card>
                    <v-card-Text>Erstes Trible Double für Doncic</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <v-layout justify-center wrap>
          <v-flex xs12 md8 shrink class="background">
            <v-container>
              <v-layout>
                <v-flex xs12 md12 class="header">
                  <tr><h3>Spielstatistiken</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12>
                  <v-data-table class="datatable"
                    :headers="headers"
                    :items="playerStats"
                    @click:row="showConsole(value)"
                    hide-default-footer>
                  </v-data-table>
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
    name: 'Player',
    data () {
      return{
        test: [],
        
        headers: [
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
          /*{
            text: 'FG%',
            sortable: false,
            value: 'fgp',
            align: 'center',
          },*/
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
          /*{
            text: '3P%',
            sortable: false,
            value: '3pp',
            align: 'center',
          },*/
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
          /*{
            text: 'FT%',
            sortable: false,
            value: 'ftp',
            align: 'center',
          },*/
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
            value: 'trb',
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
        playerStats: [],
        headers2: [
          {
            text: 'G',
            sortable: false,
            value: 'gamenrc',
            align: 'center',
          },
          {
            text: 'PKT',
            sortable: false,
            value: 'ppgc',
            align: 'center',
          },
          {
            text: 'REB',
            sortable: false,
            value: 'rpgc',
            align: 'center',
          },
          {
            text: 'AST',
            sortable: false,
            value: 'apgc',
            align: 'center',
          },
          {
            text: 'FG%',
            sortable: false,
            value: 'fgpc',
            align: 'center',
          },
          {
            text: 'FG3%',
            sortable: false,
            value: 'fg3pc',
            align: 'center',
          },
          {
            text: 'FW%',
            sortable: false,
            value: 'ftpc',
            align: 'center',
          },
          {
            text: 'STL',
            sortable: false,
            value: 'stlc',
            align: 'center',
          },
          {
            text: 'BLK',
            sortable: false,
            value: 'blkc',
            align: 'center',
          },
        ],
        random: [
          {
            gamenrc: 72,
            ppgc: 21.2,
            rpgc: 7.8,
            apgc: 6.0,
            fgpc: 0.427,
            fg3pc: 0.327,
            ftpc: 0.713,
            stlc: 1.1,
            blkc: 0.3,
            align: 'center',
          }
        ]
      }
    },
    methods: {
      showConsole (items) {
        console.log(items)
      }
    },
    computed: {
      player () {
        return this.$store.getters.getSelectedPerson
      },
      teams () {
        return this.$store.getters.getAllTeams
      },
      playReports () {
        return this.$store.getters.getAllPlayReports
      }
    },
    mounted () {
      this.playReports.map((playReport, index) => {
        if(playReport.data.team1 === this.player.data.teamID) {
          const playerData = playReport.data.playerDataTeam1
          const key = Object.keys(playerData).filter(key => key == this.player.id)
          if(playerData[key] == undefined) {
            this.playerStats.push({MP:0})
            //todo colon should display "did not play"
          } else {
            this.playerStats.push(playerData[key])
          }
        }
        else if(playReport.data.team2 === this.player.data.teamID) {
          const playerData = playReport.data.playerDataTeam2
          const key = Object.keys(playerData).filter(key => key == this.player.id)
          if(playerData[key] == undefined) {
            //todo colon should display "did not play"
            this.playerStats.push({MP:0})
          } else {
            this.playerStats.push(playerData[key])
          }
        }
        else {
        }
      })
    }
  }
</script>

<style>
  .picture {
    border: 1px solid #dddddd;
    background: #fff;
    max-height: 230px;
  }
  table h2 {
    text-align: center;
  }
  th {
    padding: 1px 20px 1px 0px;
    text-align: left;
  }
  tr {
    line-height: 18px;
  }
  .background {
    background-color: #e9e9e9;
    width: 100%;
  }
  .background2 {
    background-color: #e9e9e9;
    margin-top: -30px;
    border: 0px;
  }
  .header {
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
  }
  .header2 {
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
  }
  .headertop {
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
  .information {
    border: 1px solid #ddd;
    background: #fff;
    color: black;
    font-size: 14px;
    min-height: 230px;
    padding: 10px 15px;
    line-height: 18px;
  }
  .information2 {
    border: 1px solid #ddd;
    background: #fff;
    color: black;
    font-size: 14px;
    padding: 10px 15px;
    line-height: 18px;
   
  }
  .informationkarriere {
    border: 1px solid #ddd;
    background: #fff;
    color: black;
    font-size: 14px;
    padding: 10px 15px;
    line-height: 18px;
  }
  .information table.spielerdaten th {
    min-width: 140px;
  }
  .datatable thead {
    background: #e9e9e9;
  }
  .datatable th {
    max-width: 56px;
    min-width: 48px;
    color: black;
    border: 1px solid #ddd;
  }
  .datatable td {
    color: black;
    border: 1px solid #ddd;
  }
  .theme--dark.v-table thead th {
    color: black;
}
  .v-data-table td, .v-data-table th {
    padding: 0px;
  }
.v-data-table table {
    width: 100%;
    border-collapse: collapse;
}
</style>