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
    <ul class="content">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="columns mx-4 my-0 py-0"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="
            column
            is-three-quarters-mobile
            is-two-fifths-tablet
            is-one-third-desktop
            is-one-third-widescreen
            is-one-third-fullhd
            py-0
          "
        >
          {{ article.date }} /
          <span class="has-text-weight-bold">{{ article.title }}</span>
        </NuxtLink>
        <span class="column py-0">{{ article.description }}</span>
      </li>
    </ul>
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
