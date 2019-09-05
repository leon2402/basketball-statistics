import { db } from '@/firebase.js'

export default {
    state:{
        teams: null,
        selectedTeam: null,
    },
    mutations:{
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
    },
    actions:{
        getTeams ({commit}) { 
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
            }, err => {
                commit('setError', error)
                console.log(`Encountered error: ${err}`);
            });
        },
        loadSelectedTeams({commit}, where) {
            commit('setLoading', true)
            let selectedTeams = []
            let query = db.collection('teams').where(where.key, '==', where.value)
            let observer = query.onSnapshot(querySnapshot => {
                let changes = querySnapshot.docChanges()
                changes.forEach(change => {
                    console.log(change.type)
                    let team = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    selectedTeams.push(team)
                })
            commit('setTeams', selectedTeams)
            //commit('setLoading', false)
            }, err => {
                commit('setError', error)
                console.log(`Encountered error: ${err}`);
            });
        },
        selectTeam({commit}, id) {
            commit('setSelectedTeam', id)
        },
        createTeam ({commit}, team) {
            commit('setLoading', true)
            commit('clearError')
            db.collection("teams").add({
                name: team.name,
                league: team.league,
                group: team.group,
                nickname: team.nickname,
                shortname: team.shortname,
                foundation: team.foundation,
                location: team.location,
                imageLink: team.imageLink,
                teamtype: team.teamtype,
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
        getAllTeams (state) {
            return state.teams
        },
        getSelectedTeam (state) {
            return state.selectedTeam
        }
    }
}