import createStore from 'redux-zero'

const initialState = {
  count: 0,
  testVal: 'test'
}

const store = createStore(initialState)

export default store
