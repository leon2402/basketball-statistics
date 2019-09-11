import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from "./store"
import * as VueSpinnersCss from "vue-spinners-css";

Vue.use(VueSpinnersCss)


Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App),
  router,
  store,
  created (){
    /*this.$store.dispatch('getPersons')
    this.$store.dispatch('getTeams')
    this.$store.dispatch('loadAllPlayReports')*/
    this.$store.dispatch('loadAllNews')
  }
}).$mount('#app')
