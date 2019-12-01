import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      //messages[locale] = locales(key)
      
      /**
       * add element support
       */
      const msg = locales(key)
      const msgWithElemnt = addElementLocale(msg, locale)
      messages[locale] = msgWithElemnt
    }
  })
  return messages
}

function addElementLocale(origin, locale) {
  if (locale === 'en') {
    return Object.assign(origin, enLocale)
  }

  if (locale === 'zh-cn') {
    return Object.assign(origin, zhLocale)
  }

  return origin
}


const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})

export default i18n
