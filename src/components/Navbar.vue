<template>
  <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navbarMenuHeroA" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <span class="navbar-item has-text-centered">
              <!-- FIXME(1) Get this from data! -->
              <!-- <a class="is-primary" href="https://github.com/thomastu">
                <font-awesome :icon="['fab', 'github']"/>
              </a> -->
            </span>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
module.exports = {
  data() {
    return {
      showNav: false
    }
  }
}



</script>

<style>

</style>