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
    ]
})