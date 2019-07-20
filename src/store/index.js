import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase.js'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        player:  null,
        teams: null,
        loading: null,
        siteLoading: null,
        selectedPlayer: null,
        error: null,
    },
    mutations:{
        setPlayer (state, payload) {
            state.player = payload
        },
        deletePlayer(state, payload){
            state.player.map((item, index) => {
                if(item.id == payload.id){
                    state.player.splice(index)
                }
            })
        },
        setSelectedPlayer (state, payload) {
            state.player.map((item, index) => {
                if(item.id == payload){
                    state.selectedPlayer = item
                }
            })
        },
        setTeams (state, payload) {
            state.teams = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setSiteLoading (state, payload) {
            state.siteLoading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        },
    },
    actions:{
        getPlayer ({commit}) { 
            commit('setSiteLoading', true)
            let allPlayer = []
            let query = db.collection('player')
            let observer = query.onSnapshot(querySnapshot => {
                let changes = querySnapshot.docChanges()
                changes.forEach(change => {
                    console.log(change.type)
                    if(change.type == 'modified'){
                        let player = {
                            id: change.doc.id,
                            data: change.doc.data()
                        }
                        commit('deletePlayer', player) 
                    }
                    else if(change.type == 'removed'){
                        let player = {
                            id: change.doc.id,
                            data: change.doc.data()
                        }
                        commit('deletePlayer', player) 
                    }
                    let player = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    allPlayer.push(player)
                })
            commit('setPlayer', allPlayer)
            //commit('setSiteLoading', false)
            }, err => {
                console.log(`Encountered error: ${err}`);
            });
        },
        getTeams ({commit}) { 
            //commit('setSiteLoading', true)
            let allTeams = []
            let query = db.collection('teams')
            let observer = query.onSnapshot(querySnapshot => {
                let changes = querySnapshot.docChanges()
                changes.forEach(change => {
                    console.log(change.type)
                    let team = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    allTeams.push(team)
                })
            commit('setTeams', allTeams)
            commit('setSiteLoading', false)
            }, err => {
                console.log(`Encountered error: ${err}`);
            });
        },
        getSelectedPlayer({commit}, id) {
            commit('setSelectedPlayer', id)
        },
        createPlayer ({commit}, player) {
            commit('setLoading', true)
            commit('clearError')
            db.collection("player").add({
                firstname: player.firstname,
                name: player.name,
                imageLink: player.imageLink,
                birth: player.birth,
                birthplace: player.birthplace,
                nation: player.nation,
                height: player.height,
                teamID: player.teamID
            })
            .then(function() {
                alert("Document successfully written!");
            })
            .catch(function(error) {
                commit('setError', error)
                alert("Error writing document: ", error);
            });
            commit('setLoading', false)
        },
        createTeam ({commit}, team) {
            commit('setLoading', true)
            commit('clearError')
            db.collection("teams").add({
                name: team.name,
                imageLink: team.imageLink
            })
            .then(function() {
                alert("Document successfully written!");
            })
            .catch(function(error) {
                commit('setError', error)
                alert("Error writing document: ", error);
            });
            commit('setLoading', false)
        }
    },
    getters: {
        siteLoading (state) {
            return state.siteLoading
        },
        loadingStatus (state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})