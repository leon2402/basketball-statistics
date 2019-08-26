<template>
    <v-app>
        <Header />
        <v-content>
        <v-container>
            <v-layout row>
                <v-flex xs6>
                    <h2>Person erstellen</h2>
                </v-flex>
            </v-layout>
            <v-layout row v-if="error">
                <v-flex xs6>
                    <h2>{{error}}</h2>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-select
                                    v-model="role"
                                    :items="roles"
                                    name="role"
                                    label="Rolle"
                                    id="role">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-select
                                    v-model="gender"
                                    :items="genders"
                                    name="gender"
                                    label="Geschlecht"
                                    id="gender">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex>
                    <form>
                        <v-layout row>
                            <v-flex xs3 offset-sm1>
                                <v-text-field
                                    v-model="firstname"
                                    name="firstname"
                                    label="Vorname"
                                    id="firstname">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs3 offset-sm1>
                                <v-text-field
                                    v-model="name"
                                    name="name"
                                    label="Nachname"
                                    id="name">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-text-field
                                    v-model="fullname"
                                    name="fullname"
                                    label="Vollständiger Name"
                                    id="fullname">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-text-field
                                    v-model="nickname"
                                    name="nickname"
                                    label="Künstlername"
                                    id="fullname">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-text-field
                                    v-model="imageLink"
                                    name="imageLink"
                                    label="Bild Link"
                                    id="imageLink">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <form>
                        <v-layout row>
                            <v-flex xs4 offset-sm1>
                                <v-text-field
                                    v-model="birth"
                                    name="birthdate"
                                    label="Geburtsdatum"
                                    id="birthdate">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs4 offset-sm1>
                                <v-text-field
                                    v-model="birthplace"
                                    name="birthplace"
                                    label="Geburtsort"
                                    id="birthplace">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs4 offset-sm1>
                                <v-select
                                    v-model="birthnation"
                                    :items="nations"
                                    name="birthnation"
                                    label="Geburtsland"
                                    id="birthnation">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-text-field
                                    v-model="death"
                                    name="death"
                                    label="Todestag"
                                    id="death">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex>
                    <form>
                        <v-layout row>
                            <v-flex xs3 offset-sm1>
                                <v-select
                                    v-model="nation"
                                    :items="nations"
                                    name="nation"
                                    label="1. Nationalität"
                                    id="nation">
                                </v-select>
                            </v-flex>
                            <v-flex xs3 offset-sm1>
                                <v-select
                                    v-model="nation2"
                                    :items="nations"
                                    name="nation2"
                                    label="2. Nationalität"
                                    id="nation2">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-text-field
                                    v-model="height"
                                    name="height"
                                    label="Größe"
                                    id="height">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex>
                    <form>
                        <v-layout row>
                            <v-flex xs3 offset-sm1>
                                <v-select
                                    v-model="position1"
                                    :items="positions"
                                    name="position1"
                                    label="Hauptposition"
                                    id="position1">
                                </v-select>
                            </v-flex>
                            <v-flex xs3 offset-sm1>
                                <v-select
                                    v-model="position2"
                                    :items="positions"
                                    name="position2"
                                    label="Nebenposition"
                                    id="position2">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs3 offset-sm1>
                                <v-select
                                    v-model="team"
                                    :items="teamNames"
                                    name="team"
                                    label="Team Auswahl"
                                    id="team">
                                </v-select>
                            </v-flex>
                            <v-flex xs3 offset-sm1>
                                <v-text-field
                                    v-model="teamnumber"
                                    :items="teamnumber"
                                    name="teamnumber"
                                    label="Nummer im Team"
                                    id="teamnumber">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs3 offset-sm1>
                                <v-select
                                    v-model="nationalteam"
                                    :items="teamNames"
                                    name="nationalteam"
                                    label="Nationalmannschaft"
                                    id="nationalteam">
                                </v-select>
                            </v-flex>
                            <v-flex xs3 offset-sm1>
                                <v-text-field
                                    v-model="nationalteamnumber"
                                    :items="nationalteamnumber"
                                    name="nationalteamnumber"
                                    label="Nummer im Nationalteam"
                                    id="nationalteamnumber">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <form>
                        <v-layout row>
                            <v-flex xs4 offset-sm1>
                                <v-select
                                    v-model="draftyear"
                                    :items="draftyears"
                                    name="draftyear"
                                    label="Draft"
                                    id="draftyear">
                                </v-select>
                            </v-flex>
                            <v-flex xs4 offset-sm1>
                                <v-select
                                    v-model="draftpick"
                                    :items="draftpicks"
                                    name="draftpick"
                                    label="Pick"
                                    id="draftpick">
                                </v-select>
                            </v-flex>
                            <v-flex xs4 offset-sm1>
                                <v-select
                                    v-model="draftround"
                                    :items="draftrounds"
                                    name="draftround"
                                    label="Runde"
                                    id="draftround">
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs6>
                    <form>
                        <v-layout row>
                            <v-flex xs6 offset-sm2>
                                <v-btn
                                :loading="loadingCheck"
                                :disabled="checkForm"
                                color="secondary"
                                @click="createPerson"
                                >
                                Person Erstellen
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
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
            return {
                roles: ['player', 'Coach', 'assistant coach', 'referee'],
                genders: ['männlich', 'weiblich'],
                role: null,
                gender: null,
                firstname: null,
                name: null,
                fullname: null,
                nickname: null,
                imageLink: null,
                birth: null,
                birthplace: null,
                birthnation: null,
                position1: null,
                position2: null,
                death: null,
                nation: null,
                nation2: null,
                height: null,
                draftyear: null,
                draftpick: null,
                draftround: null,
                positions: ['C', 'PF', 'SF', 'SG', 'PG'],
                team: null,
                teamNames: [],
                teamnumber: null,
                nationalteam: null,
                nationalteamnumber: null,
                nations: [],
                draftyears: ['1997', '1998', '1999',
                '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
                '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                draftpicks: ['1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13','14', '15', '16', '17', '18', '19',
                '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30'],
                draftrounds: ['Runde 1', 'Runde 2'],
            }
           
        },
        methods: {
            createPerson () {
                let teamID
                this.teams.map((team, index) => {
                    if(team.data.name == this.team){
                        teamID = team.id
                    }
                }) 
                let nationalteamID
                this.teams.map((team, index) => {
                    if(team.data.name == this.nationalteam){
                        nationalteamID = team.id
                    }
                })   
                let newperson = {
                    role: this.role,
                    gender: this.gender,
                    firstname: this.firstname,
                    name: this.name,
                    fullname: this.fullname,
                    nickname: this.nickname,
                    imageLink: this.imageLink,
                    birth: this.birth,
                    birthplace: this.birthplace,
                    birthnation: this.birthnation,
                    death: this.death,
                    nation: this.nation,
                    nation2: this.nation2,
                    height: this.height,
                    position1: this.position1,
                    position2: this.position2,
                    teamID: teamID,
                    draftyear: this.draftyear,
                    draftpick: this.draftpick,
                    draftround: this.draftround,
                    teamnumber: this.teamnumber,
                    nationalteamID: nationalteamID,
                    nationalteamnumber: this.nationalteamnumber
                }
                console.log(newperson)
                    this.$store.dispatch('createPerson', newperson)
                    this.firstname = null
                    this.name = null
                    this.fullname = null
                    this.imageLink = null
                    this.birth = null
                    this.birthplace = null
                    this.birthnation = null
                    this.nation = null
                    this.nation2 = null
                    this.position1 = null
                    this.position2 = null
                    this.team = null
                    this.teamnumber = null
                    this.nationalteam = null
                    this.nationalteamnumber = null
            },
        },
        computed: {
            loadingCheck () {
                return this.$store.getters.loadingStatus
            },
            error () {
                return this.$store.getters.error
            },
           teams  () {
                return this.$store.getters.getAllTeams
            },
            checkForm () {
                if(this.name && this.firstname && this.role){
                    return false
                } else {
                    return true
                }
            },
            
        },
        mounted () {
            this.teams.map((team, index) => {
                this.teamNames.push(team.data.name)
            })
            nationsData.map((item, index) => {
                this.nations.push(item.name)
            })
        }
    }
</script>