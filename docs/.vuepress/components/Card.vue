<template>
  <a :href="link" class="block rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="thumbnail.src" :alt="thumbnail.description">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ overview }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: ['thumbnail', 'title', 'overview']
}
</script>

<style>

</style>