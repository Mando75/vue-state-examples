import { store, types } from 'vuelm'

// Define the update types
const Type = types('INCREMENT', 'DECREMENT', 'ADD_COUNT')

// Define the initial state
const state = {
  count: 0
}

// Assign functions to the update types
const updates = {
  [Type.INCREMENT] (state) {
    state.count = state.count + 1
    return state
  },

  [Type.DECREMENT] (state) {
    state.count = state.count - 1
    return state
  },

  [Type.ADD_COUNT] (state, toAdd) {
    state.count = state.count + toAdd
    return state
  }
}

// Create custom actions
const actions = {
  increment () {
    this.update(Type.INCREMENT)
  },
  decrement () {
    this.update(Type.DECREMENT)
  },
  asyncIncrement () {
    setTimeout(() => this.update(Type.INCREMENT), 500)
  },
  asyncDecrement () {
    setTimeout(() => this.update(Type.DECREMENT), 500)
  },
  addToCounter ({ toAdd }) {
    this.update(Type.ADD_COUNT, toAdd)
  }

}

// Link the state, updates functions, and actions
export default store(state, updates, actions)
