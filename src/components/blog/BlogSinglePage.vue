<template>
    <div v-if="hasPosts">
        <div v-html="post.title"></div>
        <blog-hero-image v-if="post.image" :image-url="post.image"/>
        <div v-html="post.intro"></div>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
import BlogJson from "@/content/blog/posts.json";
import BlogHeroImage from "@/components/blog/BlogHeroImage";

export default {
    name: 'BlogSinglePage',
    components: {BlogHeroImage},
    data () {
        return {
            slug: null,
            posts: []
        };
    },
    computed: {
        post () {
            for (let key in this.posts) {
                if (key === this.slug) {
                    return this.posts[key];
                }
            }
        },
        hasPosts() {
            return Object.keys(this.posts).length > 0;
        }
    },
    mounted () {
        this.slug = this.$route.params.slug;
        this.posts = BlogJson;
    }
}
</script>
