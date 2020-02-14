import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CaseStudy from '../views/CaseStudy.vue';

Vue.use(VueRouter)

const routes = [
    {
        path     : '/',
        name     : 'home',
        component: Home
    },
    {
        path     : '/case-study',
        name     : 'case-study',
        component: CaseStudy
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
