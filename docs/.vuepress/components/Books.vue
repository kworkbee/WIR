<template>
  <div class="wir">
    <section class="books ongoing">
      <header class="subheader">
        <h3>Ongoing</h3>
      </header>

      <div class="wrapper">
        <BookFigure :src="book.src" :title="book.title" :thumbnail="book.thumbnail" v-for="(book, index) in ongoing" :key="index" />
      </div>
    </section>

    <section class="books completed">
      <header class="subheader">
        <h3>Completed</h3>
      </header>

      <div class="wrapper">
        <BookFigure :title="book.title" :thumbnail="book.thumbnail" v-for="(book, index) in completed" :key="index" />
      </div>
    </section>
  </div>
</template>

<script>
import BookList from '../const.books'
export default {
  data () {
    return {
      ongoing: null,
      completed: null,
    }
  },
  mounted() {
    this.ongoing = BookList.ongoing
    this.completed = BookList.completed
  }
}
</script>

<style>
.wir header {
  margin-bottom: 30px;
}
</style>