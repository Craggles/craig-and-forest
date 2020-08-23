<template>
    <div v-if="posts.length > 0">
        <div v-html="post.title"></div>
        <div v-html="post.intro"></div>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
import BlogJson from "@/content/blog/blog.json";

export default {
    name: 'BlogSinglePage',
    data () {
        return {
            slug: null,
            posts: []
        };
    },
    computed: {
        post () {
            return this.posts.filter(post => {
                return post.slug === this.slug;
            })[0];
        }
    },
    mounted () {
        this.slug = this.$route.params.slug;
        this.posts = BlogJson;
    }
}
</script>
