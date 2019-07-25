import Vue from 'vue'
import Vuex from 'vuex'

import shared from './shared'
import news from './news'
import teams from './teams'
import persons from './persons'
import playreports from './playreports'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        shared: shared,
        news: news,
        teams: teams,
        persons: persons,
        playreports: playreports
    }
})