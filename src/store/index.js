import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase.js'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        player:  null,
        loading: null,
    },
    mutations:{
        deleteUpdatedPlayer(state, payload){
            state.player.map((item, index) => {
                if(item.id == payload.id){
                    state.player.splice(index)
                }
            })
        },
        setPlayer (state, payload) {
            state.player = payload
        },
        setLoading (state) {
            state.loading = true
        },
        loaded (state) {
            state.loading = false
        },
    },
    actions:{
        getPlayer ({commit}, state) { 
            commit('setLoading')
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
                        commit('deleteUpdatedPlayer', player) 
                    }
                    let player = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    allPlayer.push(player)
                })
            commit('setPlayer', allPlayer)
            commit('loaded')
            }, err => {
                console.log(`Encountered error: ${err}`);
            });
        },
    },
})