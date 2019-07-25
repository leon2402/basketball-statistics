import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from "./store"



Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store,
  created (){
    this.$store.dispatch('getPersons')
    this.$store.dispatch('getTeams')
    this.$store.dispatch('loadAllPlayReports')
    this.$store.dispatch('loadAllNews')
  }
}).$mount('#app')
