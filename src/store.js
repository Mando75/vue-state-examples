import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
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

  }
})
