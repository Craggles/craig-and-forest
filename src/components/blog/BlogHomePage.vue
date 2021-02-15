<template>
    <div>
        <div v-for="(post, index) in posts" :key="index">
            <a :href="`/blog/${index}.html`">
                <div v-html="post.title"></div>
            </a>
            <blog-hero-image v-if="post.image" :image-url="post.image"/>
            <div v-html="post.date"></div>
            <div v-html="getPostCategories(post.categories)"></div>
            <div v-html="post.intro"></div>
        </div>
    </div>
</template>

<script>
import BlogJson from '@/content/blog/posts.json';
import BlogCategories from '@/content/blog/categories.json';
import BlogHeroImage from "@/components/blog/BlogHeroImage";

export default {
    name: 'BlogHomePage',
    components: {BlogHeroImage},
    data () {
        return {
            posts: [],
            categories: [],
        }
    },
    mounted () {
        this.posts = BlogJson;
        this.categories = BlogCategories;
    },
    methods: {
        getPostCategories(categories) {
        }
    }
}
</script>
