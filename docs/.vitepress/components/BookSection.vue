<template>
  <article class="wir">
    <header>
      <h1>What I Read</h1>
    </header>

    <div class="container">
      <header class="subheader">
        <h2>Books</h2>
      </header>

      <section class="books ongoing">
        <header class="subheader">
          <h3>Ongoing</h3>
        </header>

        <div class="wrapper">
          <figure v-for="(book, index) in ongoing" :key="index">
            <img :src="book.src" :alt="book.title">
            <figcaption>{{ book.title }}</figcaption>
          </figure>
        </div>
      </section>
    
      <section class="books completed">
        <header class="subheader">
          <h3>Completed</h3>
        </header>

        <div class="wrapper">
          <figure v-for="(book, index) in completed" :key="index">
            <img :src="book.src" :alt="book.title">
            <figcaption>{{ book.title }}</figcaption>
          </figure>
        </div>
      </section>

    </div>

    <div class="container">
      
      <header class="subheader">
        <h2>References</h2>
      </header>
      
      <section class="references">
        <ul class="links">
          <li>Soon be updated.</li>
          <li v-for="(ref, index) in ReferenceList" :key="index">
            <a :href="ref.src">{{ ref.title }}</a>
          </li>
        </ul>
      </section>

    </div>

  </article>
</template>

<script>
import BookList from "../const.books"
import ReferenceList from "../const.references"

export default {
  data () {
    return {
      ongoing: null,
      completed: null,
      ReferenceList,
    }
  },
  mounted() {
    this.ongoing = BookList.ongoing
    this.completed = BookList.completed
  }
}
</script>

<style lang="scss">
.wir {
  header {
    margin: {
      bottom: 30px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;

    figure {
      font: {
        size: 1.5rem;
        weight: 500;
      }
      text: {
        align: center;
      }
    }
  }
}
</style>
