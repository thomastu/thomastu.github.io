<template>
  <FullheightHero>
    <section class="section columns">
      <div class="container column is-half content">
        <g-image alt="me" src="~/profile.png" height="200" width="200" style="border-radius: 50%;" />
        <p class="block">
          I'm currently over-engineering a new personal site!
          Stay tuned!
          <hr>
          <a class="is-info" :href="'https://github.com/' + contact.github_username">
            <font-awesome :icon="['fab', 'github']"/>
          </a>
        </p>
      </div>
    </section>
  </FullheightHero>
</template>

<script>
import FullheightHero from '~/layouts/Home.vue'
import contact from '~/data/contact.yaml'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    FullheightHero
  },

  data: function() {
    return {
      contact
    }
  }

}
</script>

<style lang="scss">

</style>
