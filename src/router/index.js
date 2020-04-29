import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FreddiesFlowers from '../views/FreddiesFlowers.vue';

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
        path     : '/freddies-flowers',
        name     : 'freddies-flowers',
        component: FreddiesFlowers,
        meta     : {
            title: "Craig & Forest – Freddie's Flowers",
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
