<template>
  <FullheightHero>
    <g-image alt="profile" src="~/profile.png" width="135" />
    
    <h1>Hello, world!</h1>
   
    <p>
      Software engineer excited about energy efficiency, distributed energy resources, and renewables. Currently at Energy Solutions using python/Django to implement claim processing platforms for efficiency programs, and supporting internal BI efforts. Former software developer for the Energy Efficiency Standards group at Lawrence Berkeley National Lab where I worked on the International Database for Efficienct Appliances and internal tooling which facilitated the data collection, management and analysis of online appliance markets. Graduated in 2014 from UC San Diego with a B.S. in Physics and Mathematics.
    </p>
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

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
