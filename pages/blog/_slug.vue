<template>
  <article class="container px-5">
    <h1 class="title">{{ article.title }}</h1>
    <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
    <br />
    <div class="toc mx-3 mb-3">
      <section class="menu col-4">
        <p class="menu-label">Table of Contents</p>
        <ul class="menu-list">
          <li v-for="link of article.toc" :key="link.id">
            <NuxtLink
              :to="`#${link.id}`"
              :class="{
                'px-4': link.depth === 2,
                'ml-4': link.depth === 3,
              }"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </section>
    </div>
    <section>
      <nuxt-content class="prose mb-5" :document="article" />
    </section>

    <hr />

    <author :author="article.author" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('posts', params.slug).fetch()

    const [prev, next] = await $content('posts')
      .only(['title', 'slug', 'date'])
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
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

<style>
.toc {
  max-width: 500px;
  margin-left: -10px;
}
</style>
