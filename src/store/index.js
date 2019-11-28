import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const pairs = [
  { id: 1, coin: 'GTM', base: 'ETH' },
]

export default new Vuex.Store({
  state: {
    pairs: pairs,
    curPair: pairs[0],
  },
  mutations: {
    changeCurPair: (state, payload) => {
      state.curPair = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
