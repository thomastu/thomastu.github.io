<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div>
        <p class="title">Hello.</p>

        <p class="subtitle">
          <vue-typed-js :key="currentTopic" :strings="[currentTopic]">
            <p>
              <br />Let's chat about <span class="is-uppercase typing"></span>
            </p>
          </vue-typed-js>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url('~/assets/background.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      topic: 0,
      topics: ['Energy', 'Climate', 'Software', 'Cats'],
    }
  },
  computed: {
    currentTopic() {
      return this.topics[this.topic]
    },
  },
  created() {
    this.interval = setInterval(() => this.changeTopic(), 2100)
  },
  methods: {
    changeTopic() {
      this.topic = (this.topic + 1) % this.topics.length
    },
  },
}
</script>
