<template>
  <div class="container my-5">
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
  name: 'BlogList',
  async asyncData({ $content, params }) {
    const articles = await $content('posts')
      .where({ published: true })
      .only(['title', 'description', 'img', 'slug', 'author', 'date'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
