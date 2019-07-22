import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AllPlayer from '../components/AllPlayer.vue'
import Teams from '../components/Teams.vue'
import Player from '../components/Player.vue'
import PersonCreate from '../components/PersonCreate.vue'
import TeamCreate from '../components/TeamCreate.vue'
import Team from '../components/Team.vue'

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
    ]
})