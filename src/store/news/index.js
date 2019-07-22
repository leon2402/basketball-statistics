import { db } from '@/firebase.js'

export default {
    state: {
        allNews: null,
    },
    mutations: {
        setAllNews (state, payload) {
            state.allNews = payload
        }
    },
    actions: {
        loadAllNews ({commit}) { 
            //commit('setSiteLoading', true)
            let allNews = []
            let query = db.collection('news')
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
    },
    getters: {
        getAllNews (state) {
            return state.allNews
        }
    }
}