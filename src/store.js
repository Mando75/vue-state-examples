import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // default state
  state: {
    count: 0
  },
  /*
    Getters define how data from the store is accessed
    They can also provide some useful functionality like formatting
    or transformation so that logic isn't included in the view
  */
  getters: {
    getCount: state => state.count,
    getDoubledCount: state => state.count * 2
  },
  /*
    Mutations actively mutate the state object. They cannot be async.
    It is recommended that they remain 'pure functions' (no input transformations)
    It is recommended that mutation parameters should be objects
  */
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    addToCounter: (state, { toAdd }) => { state.count += toAdd }
  },
  /*
    Actions allow you to execute some logic before firing a mutation. Actions can
    be used for async tasks.

    Actions fire a mutation using the 'commit()' function
    with the name of the mutation to fire.

    It is suggested that actions should take an object as a parameter.
  */
  actions: {
    asyncIncrement: context => setTimeout(() => context.commit('increment'), 500),
    asyncDecrement: context => setTimeout(() => context.commit('decrement'), 500),
    addToCounter: ({ commit }, payload) => commit('addToCounter', payload)
  }
})
