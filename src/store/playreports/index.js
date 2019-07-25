import { db } from '@/firebase.js'

export default {
    state:{
        allPlayReports: null,
    },
    mutations:{
        setPlayReport(state, payload){
            state.allPlayReports = payload
        },
    },
    actions: {
        loadAllPlayReports ({commit}) {
            //commit('setSiteLoading', true)
            let allPlayReports = []
            let query = db.collection('playreports')
            let observer = query.onSnapshot(querySnapshot => {
                let changes = querySnapshot.docChanges()
                changes.forEach(change => {
                    console.log(change.type)
                    let team = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    allPlayReports.push(team)
                })
            commit('setPlayReport', allPlayReports)
            //commit('setSiteLoading', false)
            }, err => {
                commit('setError', error)
                console.log(`Encountered error: ${err}`);
            });
        },
        createPlayReport ({commit}, data) {
            commit('setLoading', true)
            commit('clearError')
            db.collection("playreports").add({
               name: data.name,
               playerTeam1: data.playerTeam1
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
        getAllPlayReports (state) {
            return state.allPlayReports
        }
    }
}