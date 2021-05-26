<template>
  <NuxtLink :to="`/blog/author/${author.name}`">
    <div>
      <p class="is-size-7">by {{ author.name }}</p>
    </div>
  </NuxtLink>
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
