import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase.js'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        persons:  null,
        teams: null,
        loading: null,
        siteLoading: null,
        selectedPerson: null,
        selectedTeam: null,
        error: null,
    },
    mutations:{
        setPersons (state, payload) {
            state.persons = payload
        },
        deletePerson (state, payload){
            state.persons.map((item, index) => {
                if(item.id == payload.id){
                    state.persons.splice(index)
                }
            })
        },
        setSelectedPerson (state, payload) {
            state.persons.map((item, index) => {
                if(item.id == payload){
                    state.selectedPerson = item
                }
            })
        },
        setTeams (state, payload) {
            state.teams = payload
        },
        setSelectedTeam (state, payload) {
            state.teams.map((item, index) => {
                if(item.id == payload){
                    state.selectedTeam = item
                }
            })
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
        getPersons ({commit}) { 
            commit('setSiteLoading', true)
            let allPersons = []
            let query = db.collection('persons')
            let observer = query.onSnapshot(querySnapshot => {
                let changes = querySnapshot.docChanges()
                changes.forEach(change => {
                    console.log(change.type)
                    if(change.type == 'modified'){
                        let person = {
                            id: change.doc.id,
                            data: change.doc.data()
                        }
                        commit('deletePerson', person) 
                    }
                    else if(change.type == 'removed'){
                        let person = {
                            id: change.doc.id,
                            data: change.doc.data()
                        }
                        commit('deletePerson', person) 
                    } else {
                        let person = {
                            id: change.doc.id,
                            data: change.doc.data()
                        }
                        allPersons.push(person)
                    }
                })
            commit('setPersons', allPersons)
            //commit('setSiteLoading', false)
            }, err => {
                commit('setError', error)
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
                commit('setError', error)
                console.log(`Encountered error: ${err}`);
            });
        },
        getSelectedPerson({commit}, id) {
            commit('setSelectedPerson', id)
        },
        selectTeam({commit}, id) {
            commit('setSelectedTeam', id)
        },
        createPerson ({commit}, player) {
            commit('setLoading', true)
            commit('clearError')
            db.collection("persons").add({
                role: player.role,
                gender: player.gender,
                firstname: player.firstname,
                name: player.name,
                fullname: player.fullname,
                nickname: player.nickname,
                imageLink: player.imageLink,
                birth: player.birth,
                birthplace: player.birthplace,
                birthnation: player.birthnation,
                death: player.death,
                nation: player.nation,
                nation2: player.nation2,
                height: player.height,
                position1: player.position1,
                position2: player.position2,
                teamID: player.teamID,
                draftyear: player.draftyear,
                draftpick: player.draftpick,
                draftround: player.draftround
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
                foundation: team.foundation,
                location: team.location,
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
        getAllPersons (state) {
            return state.persons
        },
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