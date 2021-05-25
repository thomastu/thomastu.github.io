<template>
  <div>
    <b-navbar
      id="main-nav"
      class="navbar is-transparent mb-4"
      fixed-top
      centered
    >
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            style="border-radius: 50%"
            src="~/assets/me.jpg"
          />&nbsp;thomastu.io
        </b-navbar-item>
      </template>
      <template #start>
        <nuxt-link
          v-for="(item, key) of items"
          :key="key"
          :to="item.to"
          class="navbar-item is-size-4"
          exact-active-class="is-active"
        >
          {{ item.title }}
        </nuxt-link>
      </template>
      <template #end>
        <b-navbar-item
          class="navbar-item"
          target="_blank"
          href="https://github.com/thomastu"
          ><b-icon :icon="'github'"
        /></b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>

    <footer class="footer is-small">
      <div class="content">
        <p class="has-text-right is-size-7">
          if I were an enterprise with lawyers I would put a copyright here but
          I'm definitely just a human person so if you see an image, code or
          content you want to use it's not like I could stop you anyway
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'home',
          to: { name: 'index' },
        },
        {
          title: 'about',
          to: { name: 'about' },
        },
        {
          title: 'posts',
          to: { name: 'blog' },
        },
      ],
    }
  },
}
</script>

<style scoped>
#main-nav {
  box-shadow: 0px 2px;
}
</style>
