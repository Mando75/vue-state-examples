import createStore from 'redux-zero'

// Set our initial state
const initialState = {
  count: 0,
  testVal: 'test'
}

// create the store and make it availabel
const store = createStore(initialState)

export default store
