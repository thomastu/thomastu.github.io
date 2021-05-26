<template>
  <NuxtLink class="is-size-7" :to="`/blog/author/${author.name}`"
    ><slot /> {{ author.name }}</NuxtLink
  >
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
