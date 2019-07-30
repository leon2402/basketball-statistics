<template>
  <v-app v-if="!siteLoading">
      <router-view></router-view>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'
import AllPlayer from './components/person/AllPlayer.vue'
import Teams from './components/team/Teams.vue'
import Player from './components/person/Player.vue'
import PersonCreate from './components/person/PersonCreate.vue'
import TeamCreate from './components/team//TeamCreate.vue'
import Team from './components/team/Team.vue'
import AllNews from './components/news/AllNews.vue'
import News from './components/news/News.vue'
import AllPlayReports from './components/playreport/allplayreports.vue'
import PlayReportCreate from './components/playreport/playreportcreate.vue'
import PlayReportEdit from './components/playreport/playreportedit.vue'

export default {
  name: 'App',
  components: {
    "Homepage": HomePage,
    AllPlayer,
    Teams,
    Player,
    PersonCreate,
    TeamCreate,
    Team,
    AllNews,
    News,
    "AllPlayReports": AllPlayReports,
    PlayReportCreate,
    PlayReportEdit
  },
  computed: {
    siteLoading () {
      return this.$store.getters.siteLoading
    }
  }
}
</script>
