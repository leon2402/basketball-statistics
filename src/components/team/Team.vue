<template>
  <v-app>
    <Header />
    <v-content class="mainbackground">
      <v-container justify-center wrap>
        <v-layout justify-center wrap>
          <v-flex xs12 md5 class="background">
            <v-container fluid>
              <v-layout>
                <v-flex xs12 md12 class="header">
                  <tr><h3>Roster</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12>
                  <v-data-table class="datatable"
                    :headers="headers"
                    :items="items"
                    :items-per-page="20"
                    sort-by="nr"
                    hide-default-footer>
                    <template v-slot:item="props">
                      <tr>
                        <td align="center"> {{props.item.nr}} </td>
                        <td class="teamnameleft" @click="onLoadPlayer(props.item)"><v-btn text x-small class="btnfibawm"> {{props.item.playername}} </v-btn> </td>
                        <td align="center"> {{props.item.pos1}} </td>
                        <td align="center"> {{props.item.birthday}} </td>
                        <td align="center"> {{props.item.height}}&nbsp;cm </td>
                        <td align="center"> <img :src="flaggen.find(flagge => flagge.name === props.item.nationality).flag" 
                          height="12px"
                          width="23px"> </td>   
                      </tr>
                    </template>
                  </v-data-table>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Coach</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12>
                  <v-data-table class="datatable"
                    :headers="headercoach"
                    :items="itemscoach"
                    :items-per-page="20"
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
                  <tr><h3>Informationen</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6 md6 align-self-center grow class="picture">
                  <v-img
                    :src="team.data.imageLink"
                    min-height=230px
                    contain>
                  </v-img>
                </v-flex>
                <v-flex xs6 md6 class="information2">
                  <table class="teamdaten">
                    <tr><th>Teamname:</th></tr>
                    <tr>{{team.data.name}}</tr>
                    <tr><th>Ort:</th></tr>
                    <tr>{{team.data.location}}</tr>
                    <tr><th>Gründung:</th></tr>
                    <tr>{{team.data.foundation}}</tr>
                    <!-- <tr><th>Headcoach:</th></tr>
                    <tr>Rick Carlisle</tr>
                    <tr><th>Arena</th></tr>
                    <tr>American Airline Center</tr> -->
                  </table>
                </v-flex>
              </v-layout>
              <!-- <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Erfolge</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12>
                  <table class="infoerfolg">
                    <tr><th>NBA Champion:</th><td>2011</td></tr>
                    <tr><th>Conference titles:</th><td>2006, 2011</td></tr>
                    <tr><th>Division titles:</th><td>1987, 2007, 2010</td></tr>
                  </table>
                </v-flex>
              </v-layout> -->
              <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>News</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="background">
                  <v-card max-width="440" max-height="100" class="newscard" v-for="news in TeamNews" :key="news.id" @click="viewNews(news.data, news.id)">
                    <v-layout align-center>
                      <v-flex xs3 md3>
                        <v-img
                          :src="news.data.imageLink"
                          max-width="200px"
                          contain
                          class="newscardpicture"
                          >
                        </v-img>
                      </v-flex>
                      <v-flex xs9 md9>
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
              <!-- <v-layout>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Letztes Spiel</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="lastgameinfo">
                  NBA<br>
                  31.10.2019 - 18:30 Uhr
                </v-flex>
              </v-layout>
              <v-layout justify-center>
                <v-flex xs4 md4 class="lastgameinfoteams">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png"
                    max-height=80px
                    contain>
                  </v-img>
                </v-flex>
                <v-flex xs4 md4 class="lastgameinfoteams">
                  - : -
                </v-flex>
                <v-flex xs4 md4 class="lastgameinfoteams">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png"
                    max-height=80px
                    contain>
                  </v-img>
                </v-flex>
              </v-layout> -->
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
  import nationsData from '../shared/nations.json'
  export default {
    components: {
      Header,
      Footer
    },
    data () {
      return{
        flaggen : null,
        headers: [
          {
            text: '#',
            sortable: true,
            value: 'nr',
            align: 'center',
            width: '60',
            height: '30',
          },
          {
            text: 'Name',
            sortable: true,
            value: 'playername',
            align: 'left',
          },
          {
            text: 'Pos',
            sortable: true,
            value: 'pos1',
            align: 'center',
            width: '60',
          },
          {
            text: 'Geburtsdatum',
            sortable: true,
            value: 'birthday',
            align: 'center',
            width: '150',
          },
          {
            text: 'Größe',
            sortable: true,
            value: 'height',
            align: 'center',
            width: '100',
          },
          {
            text: 'Nat.',
            sortable: true,
            value: 'nationality',
            align: 'center',
            width: '60',
          },
        ],
        headercoach: [
          {
            text: 'Name',
            sortable: true,
            value: 'coachname',
            align: 'left',
          },
          {
            text: 'Position',
            sortable: true,
            value: 'posc',
            align: 'center',
            width: '150',
          },
          {
            text: 'Geburtsdatum',
            sortable: true,
            value: 'birthday',
            align: 'center',
            width: '150',
          },
          {
            text: 'Nat.',
            sortable: true,
            value: 'nationality',
            align: 'center',
            width: '60',
          },
        ],
        items: null,
        itemscoach: [
          {
            coachname: 'Rick Carlisle',
            posc: 'Headcoach',
            birthday: '27.10.1959',
            nationality: 'Flag',
          },
        ]
      }
    },
    methods: {
        viewNews (newsData, id) {
          this.$store.dispatch('selectNews', id)
          this.$router.push('/news/' + newsData.title + '/' + id)
        },
      onLoadPlayer (item) {
        this.$store.dispatch('selectPerson', item.id)
        this.$router.push('/player/' + item.name + '/' + item.id)
      },   
    },
    computed: {
      team () {
        return this.$store.getters.getSelectedTeam
      },
      allNews () {
        return this.$store.getters.getAllNews
      },
      person () {
        return this.$store.getters.getAllPersons
      },
    }, 
    created () {
      const TeamNews = this.allNews.filter(news => news.data.team2 == this.team.data.name)
        this.TeamNews = TeamNews
        
      const leerzeichen = ' ';
      let items = []
      this.person.map((person, i) => {
        if(person.data.teamID === this.team.id) {
          items.push({id:person.id, nr:person.data.teamnumber, playername:person.data.firstname+leerzeichen+person.data.name, pos1:person.data.position1, birthday:person.data.birth, height:person.data.height, nationality:person.data.nation})
        }
        else if (person.data.nationalteamID === this.team.id) {
          items.push({id:person.id, nr:person.data.nationalteamnumber, playername:person.data.firstname+leerzeichen+person.data.name, pos1:person.data.position1, birthday:person.data.birth, height:person.data.height, nationality:person.data.nation})
        }
      })
      this.items = items
      let flaggen = []
      nationsData.map((nation, index) =>{
          if(nation.flag) {
            flaggen.push(nation)
          }
        })
      this.flaggen = flaggen
    }
  }
</script>

<style>
  .picture {
    border: 1px solid #dddddd;
    background: #fff;
    max-height: 230px;
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
  .infoerfolg {
    border: 1px solid #ddd;
    background: #fff;
    width: 100%;
    color: black;
    font-size: 14px;
    padding: 10px 15px;
    line-height: 18px;
  }
  .lastgameinfo {
    border: 1px solid #ddd;
    background: #fff;
    width: 100%;
    color: black;
    font-size: 14px;
    padding: 10px 15px;
    line-height: 18px;
    text-align: center;
  }
  .lastgameinfoteams {
    background: #fff;
    width: 100%;
    color: black;
    font-size: 30px;
    padding: 10px 15px;
    line-height: 18px;
    text-align: center;
  }
  .v-application .text-left {
    text-align: left!important;
    padding: 0 5px;
  }
  .v-data-table table {
    table-layout: fixed;
  }
</style>