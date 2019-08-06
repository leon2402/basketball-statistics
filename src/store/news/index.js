import { db } from '@/firebase.js'

export default {
    state: {
        allNews: null,
        selectedNews: null
    },
    mutations: {
        setAllNews (state, payload) {
            state.allNews = payload
        },
        setSelectedNews(state, payload) {
            state.allNews.map((item, index) => {
                if(item.id == payload){
                    state.selectedNews = item
                }
            })
        },
    },
    actions: {
        loadAllNews ({commit}) { 
            //commit('setSiteLoading', true)
            let allNews = []
            let query = db.collection('news').orderBy("time", "desc")
            let observer = query.onSnapshot(querySnapshot => {
                let changes = querySnapshot.docChanges()
                changes.forEach(change => {
                    console.log(change.type)
                    let news = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    allNews.push(news)
                })
            commit('setAllNews', allNews)
            commit('setSiteLoading', false)
            }, err => {
                commit('setError', error)
                console.log(`Encountered error: ${err}`);
            });
        },
        selectNews({commit}, id) {
            commit('setSelectedNews', id)
        },
    },
    getters: {
        getAllNews (state) {
            return state.allNews
        },
        getSelectedNews (state) {
            return state.selectedNews
        }
    }
}