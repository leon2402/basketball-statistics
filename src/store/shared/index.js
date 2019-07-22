export default {
    state:{
        loading: null,
        siteLoading: null,
        error: null,
    },
    mutations:{
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
}