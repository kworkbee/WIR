<template>
    <a :href="src" target="_blank" class="block my-6">
        <figure class="figure shadow-md flex-wrap flex-row flex-grow items-center">
            <img class="w-40 inline-block" :src="thumbnail" :alt="title">
            <div class="wrapper inline-block ml-4 text-xl h-full">
                <figcaption class="break-words">{{ title }}</figcaption>
                <small class="font-thin">Started reading at <span class="font-normal">{{ startDate }}</span></small>
            </div>
        </figure>
    </a>
</template>

<script>
export default {
    props: ['thumbnail', 'title', 'src']
}
</script>

<style>
</style>