<template>
  <ul class="content">
    <li v-for="article of articles" :key="article.slug">
      <NuxtLink
        class="columns mx-4 my-0 py-0 article-link"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      >
        <span
          class="column is-three-quarters-mobile is-two-fifths-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd py-0"
        >
          <span class="is-italic has-text-link">{{
            formatDate(article.date)
          }}</span>
          /
          <span class="has-text-weight-bold">{{ article.title }}</span>
        </span>
        <span class="column py-0 is-italic">{{ article.description }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    zeroPad: (num, places) => String(num).padStart(places, '0'),
    partitionDateString(date) {
      const d = new Date(date)
      return {
        year: d.getFullYear(),
        month: this.zeroPad(d.getMonth() + 1, 2),
        day: this.zeroPad(d.getDate(), 2),
      }
    },
    formatDate(date) {
      const parts = this.partitionDateString(date)
      return `${parts.year}.${parts.month}.${parts.day}`
    },
  },
}
</script>

<style scoped>
.article-link:hover {
  color: hsl(204, 86%, 53%);
}
</style>
