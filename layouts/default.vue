<template>
  <div>
    <b-navbar
      class="navbar is-transparent mb-4"
      fixed-top="true"
      centered="true"
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
          class="navbar-item"
          v-for="(item, key) of items"
          :key="key"
          :to="item.to"
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

    <footer class="footer">
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
          title: 'Home',
          to: { name: 'index' },
        },
        {
          title: 'About',
          to: { name: 'about' },
        },
        {
          title: 'Posts',
          to: { name: 'blog' },
        },
      ],
    }
  },
}
</script>
