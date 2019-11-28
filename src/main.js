import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/**
 * plugins
 */

import '@/plugins/axios'
import '@/plugins/element.js'
import '@/plugins/gamma'

/**
 * styles
 */
import '@/assets/default.css'

/**
 * global filters
 */
import '@/scripts/filters'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    document.body.className = 'default'
  },
}).$mount('#app')
