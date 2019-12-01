import Vue from 'vue'
import Element from 'element-ui'
import '@/assets/theme-square/index.css'
import i18n from '@/plugins/i18n'

Vue.use(Element, {
  size: 'mini',
  i18n: (key, value) => i18n.t(key, value)
})