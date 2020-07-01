import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TheProcess from '../views/TheProcess.vue';

Vue.use(VueRouter);

const routes = [
    {
        path     : '/',
        name     : 'home',
        component: Home,
        meta     : {
            title: 'Craig & Forest – Digital Designs',
        },
    },
    {
        path     : '/the-process.html',
        name     : 'the-process',
        component: TheProcess,
        meta     : {
            title: "Craig & Forest – The Process",
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
