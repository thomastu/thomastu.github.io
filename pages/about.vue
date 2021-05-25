<template>
  <div>
    <section class="hero is-medium is-success">
      <div class="hero-body">
        <vue-typed-js :strings="intros">
          <p class="title">$<span class="is-uppercase typing"></span></p>
        </vue-typed-js>
      </div>
    </section>

    <section class="mt-5 mb-5">
      <div class="container px-5">
        <nuxt-content class="content" :document="about" />
        <p></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const about = await $content('about').fetch()
    return { about }
  },
  data() {
    return { intros: ['whoami'] }
  },
}
</script>

<style scoped>
.hero {
  background-image: url('~/assets/profile.png');
  background-size: 50% auto;
  background-repeat: no-repeat;
  background-position: right bottom;
}
</style>
