import { db } from '@/firebase.js'

export default {
    state:{
        allPlayReports: null,
        selectedPlayReport: null,
        unfinishedPlayReports: null
    },
    mutations:{
        setPlayReport(state, payload){
            state.allPlayReports = payload
        },
        setUnfinishedPlayReport(state, payload){
            state.unfinishedPlayReports = payload
        },
        setSelectedPlayReport(state, payload){
            state.unfinishedPlayReports.map((item, index) => {
                if(item.id == payload){
                    state.selectedPlayReport = item
                }
            })
            state.allPlayReports.map((item, index) => {
                if(item.id == payload){
                    state.selectedPlayReport = item
                }
            })
        },
    },
    actions: {
        loadAllPlayReports ({commit}) {
            //commit('setSiteLoading', true)
            let allPlayReports = []
            let unfinishedPlayReports = []
            //Dates for Season 2019/2020
            const start = new Date('2019-07-01');
            const end = new Date('2020-06-30');

            let query = db.collection('playreports').where("date", ">", start).where("date", "<", end).orderBy("date", "desc")
            let observer = query.onSnapshot(querySnapshot => {
                let changes = querySnapshot.docChanges()
                changes.forEach(change => {
                    console.log(change.type)
                    let playReport = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    if(playReport.data.gesamtErgebnis){
                        allPlayReports.push(playReport)
                    } else {
                        unfinishedPlayReports.push(playReport)
                    }
                    
                })
            commit('setPlayReport', allPlayReports)
            commit('setUnfinishedPlayReport', unfinishedPlayReports)
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
               liga: data.liga,
               spieltag: data.spieltag,
               team1: data.team1,
               team2: data.team2,
               date: data.date
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
        updatePlayReport ({commit}, data) {
            commit('setLoading', true)
            commit('clearError')
            db.collection('playreports').doc(data.id).update({
                ergebnis1viertel: data.ergebnis1viertel,
                ergebnis2viertel: data.ergebnis2viertel,
                ergebnis3viertel: data.ergebnis3viertel,
                ergebnis4viertel: data.ergebnis4viertel,
                gesamtErgebnis: data.gesamtErgebnis,
                attendance: data.attendance,
                arenas: this.arenas,
                referee1: data.referee1,
                referee2: data.referee2,
                referee3: data.referee3,
                playerDataTeam1: data.playerDataTeam1,
                playerDataTeam2: data.playerDataTeam2
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
        selectPlayReport({commit}, id) {
            commit('setSelectedPlayReport', id)
        },
    },
    getters: {
        getAllPlayReports (state) {
            return state.allPlayReports
        },
        getUnfinishedPlayReports (state) {
            return state.unfinishedPlayReports
        },
        getSelectedPlayReport (state) {
            return state.selectedPlayReport
        }
    }
}