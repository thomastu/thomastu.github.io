<template>
  <FullheightHero>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section class="section columns">
      <div class="container column is-half content">
        <g-image alt="me" src="~/profile.png" height="200" width="200" style="border-radius: 50%;" />
        <p class="block">
          I'm currently over-engineering a new personal site!
          Stay tuned!
          <hr>
          <a class="is-primary" href="https://github.com/thomastu">
            <font-awesome :icon="['fab', 'github']"/>
          </a>
        </p>

      </div>
    </section>
  </FullheightHero>
</template>

<script>
import FullheightHero from '~/layouts/Home.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    FullheightHero
  }
}
</script>

<style lang="scss">

</style>
