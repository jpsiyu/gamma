import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pairs: ['PPT_ETH', 'USD_ETH', 'BBB_ETH'],
    curPair: ['PPT', 'ETH'],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
