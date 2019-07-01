import DefaultLayout from '~/layouts/Default.vue'
import Navbar from '~/components/Navbar.vue'

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Import Main CSS
import '~/assets/styles.css'

Vue.use(Buefy)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Navbar', Navbar)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli'
  })

  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  })

}
