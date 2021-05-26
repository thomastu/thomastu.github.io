<template>
  <article class="container px-5 mt-4" style="border: 1px">
    <h1 class="title">{{ article.title }}</h1>
    <h2 class="subtitle">{{ article.description }}</h2>
    <p class="is-size-7">
      Post last updated: {{ formatDate(article.updatedAt) }}
    </p>
    <author :author="article.author" />
    <br />
    <div class="columns">
      <div class="column-4 toc mx-3 mb-3 pt-4">
        <section class="menu col-4">
          <p class="pt-1 menu-label has-text-weight-bold">Table of Contents</p>
          <ul class="menu-list">
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink
                :to="`#${link.id}`"
                :class="{
                  'px-4': link.depth === 2,
                  'ml-4': link.depth === 3,
                }"
                class="is-size-7"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </section>
      </div>
      <section class="column">
        <nuxt-content
          class="prose prose-green prose-sm mb-5"
          :document="article"
        />
      </section>
    </div>
    <hr />

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
  padding: 0.75rem;
}

.nuxt-content span.icon {
  margin-left: -24px;
}

.nuxt-content img {
  margin: auto;
}
</style>
