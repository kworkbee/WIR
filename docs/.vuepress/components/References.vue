<template>
    <section class="references">
        <ul class="links">
            <VerticalCard :title="reference.title" :src="reference.src" v-for="(reference, index) in ReferenceList" :key="index" />
        </ul>
    </section>
</template>

<script>
    import ReferenceList from "../const.references"
    export default {
        data() {
            return {
                ReferenceList,
            }
        },
    }
</script>

<style>

</style>