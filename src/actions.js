export const actions = store => ({
  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 }),
  asyncIncrement: state => setTimeout(() => store.setState({ count: state.count + 1 }), 500),
  asyncDecrement: state => setTimeout(() => store.setState({ count: state.count - 1 }), 500),
  addToCounter: (state, { toAdd }) => ({ count: state.count + toAdd })
})
