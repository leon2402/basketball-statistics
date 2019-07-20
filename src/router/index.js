import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AllPlayer from '../components/AllPlayer.vue'
import Team from '../components/Team.vue'
import Player from '../components/Player.vue'
import PlayerCreate from '../components/PlayerCreate.vue'
import TeamCreate from '../components/TeamCreate.vue'

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
            path: '/playercreate',
            name: 'PlayerCreate',
            component: PlayerCreate
        },
        {
            path: '/team',
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