import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/**
 * plugins
 */

import '@/plugins/eventBus'
import '@/plugins/axios'
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

import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
 store,
 router,
 render: h => h(App),
 i18n,

 created() {
   document.body.className = 'default'
 }
}).$mount('#app')
