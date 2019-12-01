import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/**
 * plugins
 */

import '@/plugins/eventBus'
import '@/plugins/axios'
import i18n from '@/plugins/i18n'
import '@/plugins/element'
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
  i18n,
  render: h => h(App),
  created() {
    document.body.className = 'default'
  }
}).$mount('#app')
