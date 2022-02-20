import Vue from 'vue'
import VueRouter from 'vue-router'


import ShowTheTeams from "@/views/ShowTheTeams";

Vue.use(VueRouter)

const routes = [
    {
        path: '/showSearch',
        name: 'ShowSearch',
        component: () => import('../views/ShowSearch.vue')
    },
    {
        path: '/showSinglePlayer',
        name: 'ShowSinglePlayer',
        component: () => import('../views/ShowSinglePlayer.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component:  import('../views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('../views/Main.vue')
    },
    {
        path: 'Teams/:teamId/players/:id',
        name: 'player',
        component: () => import('../views/Player.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/',
        name: 'ShowTheTeams',
        component: ShowTheTeams
    },
    {
        path: '/team/:id',
        name: 'showTeam',
        component: () => import(/* webpackChunkName: "showTeam " */'../views/ShowTeam.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router
