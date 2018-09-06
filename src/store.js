import createStore from 'redux-zero'

// Set our initial state
const initialState = {
  count: 0
}

// create the store and make it availabele
const store = createStore(initialState)

export default store
