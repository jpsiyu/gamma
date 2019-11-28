import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const pairs = [
  { id: 1, coin: 'PPT', base: 'ETH' },
  { id: 2, coin: 'IOD', base: 'ETH' },
  { id: 3, coin: 'BBB', base: 'ETH' },
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
