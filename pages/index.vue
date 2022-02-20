<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div>
        <p class="title is-size-1">Hello.</p>

        <p class="subtitle is-size-3">
          <vue-typed-js :loop="true" :strings="topics">
            <p>
              <br />Let's chat about
              <span
                class="is-family-monospace has-text-weight-semibold is-uppercase typing"
              ></span>
            </p>
          </vue-typed-js>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      topic: 0,
      topics: ['Energy', 'Climate', 'Software', 'Cats'],
    }
  },
}
</script>

<style scoped>
.hero {
  background-image: url('~/assets/background.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
