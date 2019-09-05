import { db } from '@/firebase.js'

export default {
    state:{
        persons:  null,
        selectedPerson: null,
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
    },
    actions:{
        getPersons ({commit}) { 
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
            }, err => {
                commit('setError', error)
                console.log(`Encountered error: ${err}`);
            });
        },
        selectPerson({commit}, id) {
            commit('setSelectedPerson', id)
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
                nationalteamID: player.nationalteamID,
                draftyear: player.draftyear,
                draftpick: player.draftpick,
                draftround: player.draftround,
                teamnumber: player.teamnumber,
                nationalteamnumber: player.nationalteamnumber
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
    },
    getters: {
        getAllPersons (state) {
            return state.persons
        },
        getSelectedPerson (state) {
            return state.selectedPerson
        }
    },
}