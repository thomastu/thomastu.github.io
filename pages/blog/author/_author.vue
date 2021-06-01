<template>
  <div class="container my-5">
    <p>
      <vue-typed-js :strings="[author]">
        <p>
          Thoughts from
          <span class="is-lowercase typing has-text-weight-bold"></span>
        </p>
      </vue-typed-js>
    </p>
    <div class="divider">POSTS</div>
    <article-list :articles="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('posts', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i'],
        },
        published: true,
      })
      .without('body')
      .sortBy('date', 'desc')
      .fetch()
    const author = articles[0].author.name

    return {
      articles,
      author,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
@import '@creativebulma/bulma-divider';
</style>
