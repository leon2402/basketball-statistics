<template>
    <v-container>
        <v-layout row>
            <v-flex xs6>
                <h2>Spieler erstellen</h2>
            </v-flex>
        </v-layout>
        <v-layout row v-if="error">
            <v-flex xs6>
                <h2>{{this.$store.state.error}}</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs6>
                <form>
                    <v-layout row>
                        <v-flex xs6 offset-sm3>
                            <v-text-field
                                v-model="firstname"
                                name="firstname"
                                label="Vorname"
                                id="firstname">
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
                        <v-flex xs6 offset-sm3>
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
                        <v-flex xs6 offset-sm3>
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
            <v-flex xs6>
                <form>
                    <v-layout row>
                        <v-flex xs6 offset-sm3>
                            <v-text-field
                                v-model="birth"
                                name="birthdate"
                                label="Geburtsdatum"
                                id="birthdate">
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
                        <v-flex xs6 offset-sm3>
                            <v-text-field
                                v-model="birthplace"
                                name="birthplace"
                                label="Geburtsort"
                                id="birthplace">
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
                        <v-flex xs6 offset-sm3>
                            <v-select
                                v-model="nation"
                                :items="nations"
                                name="nation"
                                label="Nationalität"
                                id="nation">
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
                        <v-flex xs6 offset-sm3>
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
            <v-flex xs6>
                <form>
                    <v-layout row>
                        <v-flex xs6 offset-sm3>
                            <v-select
                                v-model="team"
                                :items="teams"
                                name="team"
                                label="Team Auswahl"
                                id="team">
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
                        <v-flex xs6 offset-sm3>
                            <v-btn
                            :loading="loadingCheck"
                            :disabled="loadingCheck"
                            color="secondary"
                            @click="createPlayer"
                            >
                            Spieler Erstellen
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                firstname: null,
                name: null,
                imageLink: null,
                birth: null,
                birthplace: null,
                nation: null,
                height: null,
                team: null,
                nations: ['Deutschland', 'Vereinigte Staaten von Amerika'],
                teams: []
            }
           
        },
        methods: {
            createPlayer () {
                let teamID = null
                this.$store.state.teams.map((team, index) => {
                    if(team.data.name == this.team) {
                        teamID = team.id
                    }
                })  
                let newplayer = {
                    firstname: this.firstname,
                    name: this.name,
                    imageLink: this.imageLink,
                    birth: this.birth,
                    birthplace: this.birthplace,
                    nation: this.nation,
                    height: this.height,
                    teamID: teamID
                }
                console.log(newplayer)
                this.$store.dispatch('createPlayer', newplayer)
            }
        },
        computed: {
            loadingCheck () {
                return this.$store.getters.loading
            },
            error () {
                return this.$store.getters.error
            }
        },
        created () {
            this.$store.state.teams.map((team, index) => {
                this.teams.push(team.data.name)
            })  
        }
    }
</script>