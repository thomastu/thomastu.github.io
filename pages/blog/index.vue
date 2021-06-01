<template>
  <div class="container my-5">
    <article-list :articles="articles" />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'
export default {
  name: 'BlogList',
  components: { ArticleList },
  async asyncData({ $content, params }) {
    const articles = await $content('posts')
      .where({ published: true })
      .only(['title', 'description', 'slug', 'date'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
