<template>
  <div class="container mb-4">
    <p class="is-size-2">Posts</p>
    <ul class="content">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h3>{{ article.date }} - {{ article.title }}</h3>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  async asyncData({ $content, params }) {
    const articles = await $content('posts')
      .only(['title', 'description', 'img', 'slug', 'author', 'date'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
