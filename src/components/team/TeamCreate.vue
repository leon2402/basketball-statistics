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
                                v-model="name"
                                name="name"
                                label="name"
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
</template>

<script>
    export default {
        data () {
            return {
                name: null,
                imageLink: null,
            }
           
        },
        methods: {
            createTeam () {
                let newTeam = {
                    name: this.name,
                    imageLink: this.imageLink,
                }
                console.log(newTeam)
                this.$store.dispatch('createTeam', newTeam)
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
        