// Recommended way to create the actions
// Keep functions pure, returning the value of the to-be-modified state

// Async functions can use the setState method to update the state
export const actions = store => ({
  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 }),
  asyncIncrement: state => setTimeout(() => store.setState({ count: state.count + 1 }), 500),
  asyncDecrement: state => setTimeout(() => store.setState({ count: state.count - 1 }), 500),
  addToCounter: (state, { toAdd }) => ({ count: state.count + toAdd })
})
