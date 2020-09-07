<template>
    <img :src="getHeroImage"/>
</template>

<script>
export default {
    name: 'BlogHeroImage',
    props: {
        imageUrl: {
            required: true,
            type: String
        }
    },
    computed: {
        getHeroImage() {
            return require('@/assets/blog/' + this.imageUrl);
        }
    }
}
</script>
