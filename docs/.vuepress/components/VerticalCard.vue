<template>
  <li>
    <a :href="src">{{ title }}</a>
  </li>
</template>

<script>
  export default {
    props: ['title', 'src']
  }
</script>

<style>

</style>