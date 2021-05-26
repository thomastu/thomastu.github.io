<template>
  <article class="container">
    <h1 class="title">
      <NuxtLink :to="'./'">
        <b-icon
          size="is-medium"
          type="is-info"
          style="vertical-align: -2px"
          :icon="'chevron-left'" /></NuxtLink
      >{{ article.title }}
    </h1>
    <h2 class="subtitle pl-8">{{ article.description }}</h2>
    <author :author="article.author"
      ><span class="is-size-7 pl-8">
        Last Updated on {{ formatDate(article.updatedAt) }} |
      </span>
    </author>
    <br />
    <br />

    <div class="columns">
      <section class="column-6 toc mb-3 pt-4">
        <div class="menu pl-8">
          <p class="is-size-6 menu-label has-text-weight-bold">
            Table of Contents
          </p>
          <ul class="menu-list">
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink
                :to="`#${link.id}`"
                :class="{
                  'px-4': link.depth === 2,
                  'ml-4': link.depth === 3,
                }"
                class="is-size-6"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </section>
      <div class="divider is-vertical is-light is-success is-left mt-4"></div>
      <section class="column">
        <nuxt-content
          class="prose prose-green mb-5 max-w-none"
          :document="article"
        />

        <div class="divider">more</div>
        <prev-next class="mb-5" :prev="prev" :next="next" />
      </section>
    </div>
  </article>
</template>

<script>
export default {
  layout: 'post',
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
@import '@creativebulma/bulma-divider';

.toc {
  max-width: 500px;
  padding: 0.75rem;
}

.nuxt-content span.icon {
  /* Offset anchor icons */
  margin-left: -24px;
}

.nuxt-content img {
  margin: auto;
}
</style>
