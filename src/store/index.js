import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

import shared from './shared'
import news from './news'
import teams from './teams'
import persons from './persons'
import playreports from './playreports'


Vue.use(Vuex)

export const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => Cookies.get(key),
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) =>
                Cookies.set(key, value, { expires: 3, secure: false }),
                removeItem: key => Cookies.remove(key),
            },
        }),
    ],
    modules: {
        shared: shared,
        news: news,
        teams: teams,
        persons: persons,
        playreports: playreports
    }
})