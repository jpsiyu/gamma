import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/**
 * plugins
 */

import '@/plugins/axios'
import '@/plugins/element.js'

/**
 * styles
 */
import '@/assets/default.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    document.body.className = 'default'
  },
}).$mount('#app')
