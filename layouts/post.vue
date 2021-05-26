<template>
  <div id="default">
    <section class="main-content mt-6">
      <nuxt class="mx-4" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'about',
          to: { name: 'about' },
        },
        {
          title: 'thoughts',
          to: { name: 'blog' },
        },
      ],
    }
  },
}
</script>

<style scoped>
span.back-text {
  display: inline;
}
</style>
