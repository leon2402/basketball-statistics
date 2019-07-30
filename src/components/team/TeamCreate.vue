<template>
  <v-app>
    <Header />
    <v-content>
        <v-container>
            <v-layout row>
                <v-flex xs6>
                    <h2>Team erstellen</h2>
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
                                    v-model="name"
                                    name="name"
                                    label="Name"
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
                                    v-model="nickname"
                                    name="nickname"
                                    label="Spitzname Team"
                                    id="nickname">
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
                                    v-model="shortname"
                                    name="shortname"
                                    label="Abkürzung"
                                    id="shortname">
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
                                    v-model="foundation"
                                    name="foundation"
                                    label="Gründung"
                                    id="foundation">
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
                                    v-model="location"
                                    name="location"
                                    label="Ort"
                                    id="location">
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
                                <v-btn
                                :loading="loadingCheck"
                                :disabled="loadingCheck"
                                color="secondary"
                                @click="createTeam"
                                >
                                Team Erstellen
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
    export default {
        components: {
        Header,
        Footer
        },
        data () {
            return {
                name: null,
                nickname: null,
                shortname: null,
                foundation: null,
                location: null,
                imageLink: null,
            }
           
        },
        methods: {
            createTeam () {
                let newTeam = {
                    name: this.name,
                    nickname: this.nickname,
                    shortname: this.shortname,
                    foundation: this.foundation,
                    location: this.location,
                    imageLink: this.imageLink,
                }
                console.log(newTeam)
                this.$store.dispatch('createTeam', newTeam)
                this.name = null
                this.nickname = null
                this.shortname = null
                this.foundation = null
                this.location = null
                this.imageLink = null
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
    }
</script>
        