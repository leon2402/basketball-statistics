import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AllPlayer from '../components/person/AllPlayer.vue'
import Teams from '../components/team/Teams.vue'
import Player from '../components/person/Player.vue'
import PersonCreate from '../components/person/PersonCreate.vue'
import TeamCreate from '../components/team//TeamCreate.vue'
import Team from '../components/team/Team.vue'
import AllNews from '../components/news/AllNews.vue'
import News from '../components/news/News.vue'
import AllPlayReports from '../components/playreport/allplayreports.vue'
import PlayReportCreate from '../components/playreport/playreportcreate.vue'
import PlayReportEdit from '../components/playreport/playreportedit.vue'
import nbaTable from '../components/tables/nbaTable.vue'
import NBA from '../components/leagues/NBA.vue'
import Gameplan from '../components/leagues/Gameplan.vue'
import FIBA_WM from '../components/leagues/FIBA_WM.vue'
import Gamereport from '../components/playreport/gamereport.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/allplayer',
            name: 'AllPlayer',
            component: AllPlayer
        },
        {
            path: '/player/:name/:id',
            name: 'Player',
            component: Player
        },
        {
            path: '/personcreate',
            name: 'PersonCreate',
            component: PersonCreate
        },
        {
            path: '/teams',
            name: 'Teams',
            component: Teams
        },
        {
            path: '/team/:name',
            name: 'Team',
            component: Team
        },
        {
            path: '/teamcreate',
            name: 'TeamCreate',
            component: TeamCreate
        },
        {
            path: '/allnews',
            name: 'AllNews',
            component: AllNews
        },
        {
            path: '/news/:name/:id',
            name: 'News',
            component: News
        },
        {
            path: '/playreportcreate',
            name: 'PlayReportCreate',
            component: PlayReportCreate
        },
        {
            path: '/allplayreports',
            name: 'AllPlayReports',
            component: AllPlayReports
        },
        {
            path: '/playreportedit/:id',
            name: 'PlayReportEdit',
            component: PlayReportEdit
        },
        {
            path: '/nbatable',
            name: 'NBATable',
            component: nbaTable
        },
        {
            path: '/nba',
            name: 'NBA',
            component: NBA
        },
        {
            path: '/nba/gameplan',
            name: 'Gameplan',
            component: Gameplan
        },
        {
            path: '/fiba_wm',
            name: 'FIBA WM',
            component: FIBA_WM
        },
        {
            path: '/gamereport/:id',
            name: 'Gamereport',
            component: Gamereport
        },
    ]
})