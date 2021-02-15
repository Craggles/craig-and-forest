import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TheProcess from '../views/TheProcess.vue';
import BlogHome from "@/views/blog/BlogHome";
import BlogPage from "@/views/blog/BlogPage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Craig & Forest – Digital Designs',
        },
    },
    {
        path: '/the-process.html',
        name: 'the-process',
        component: TheProcess,
        meta: {
            title: "Craig & Forest – The Process",
        },
    },
    {
        path: '/blog/:slug.html',
        name: 'blog-page',
        component: BlogPage,
        meta: {
            title: "Craig & Forest – Blog",
        },
    },
    {
        path: '/blog.html',
        name: 'blog-home',
        component: BlogHome,
        meta: {
            title: "Craig & Forest – Blog",
        },
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
