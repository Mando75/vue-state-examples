import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount: state => state.count,
    getDoubledCount: state => state.count * 2
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    asyncIncrement: context => setTimeout(() => context.commit('increment'), 500),
    asyncDecrement: context => setTimeout(() => context.commit('decrement'), 500)
  }
})
