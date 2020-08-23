<template>
    <div>
        <div v-for="(post, index) in posts" :key="index">
            <a :href="`/blog/${post.slug}.html`">
                <div v-html="post.title"></div>
            </a>
            <div v-html="post.intro"></div>
        </div>
    </div>
</template>

<script>
import BlogJson from '@/content/blog/blog.json';

export default {
    name: 'BlogHomePage',
    data () {
        return {
            posts: []
        }
    },
    mounted () {
        this.posts = BlogJson;
    }
}
</script>
