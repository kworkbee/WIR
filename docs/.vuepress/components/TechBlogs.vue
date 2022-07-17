<template>
    <section class="tech-blogs">
        <ul class="links">
            <VerticalCard :title="reference.title" :src="reference.src" v-for="(reference, index) in TechBlogList" :key="index" />
        </ul>
    </section>
</template>

<script>
    import TechBlogList from "../const.tech-blogs"
    export default {
        data() {
            return {
                TechBlogList,
            }
        },
    }
</script>

<style>

</style>