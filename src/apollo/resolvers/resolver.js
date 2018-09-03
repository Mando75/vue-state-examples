import getCount from '../queries/getCount'

/**
 * Define your custom resolvers for client queries
 */
export const resolvers = {
  Mutation: {
    increment: (_, args, { cache }) => {
      // fetch any fields we may need to update the cache using
      // client graphql queries
      const { count } = cache.readQuery({ query: getCount })
      // Write the new data to the cache
      cache.writeData({
        data: {
          count: {
            value: count.value + 1,
            __typename: 'Count'
          }
        }
      })
      // GraphQL mutations require a return value
      // Either return queried fields, or return null
      return null
    },
    decrement: (_, args, { cache }) => {
      const { count } = cache.readQuery({ query: getCount })

      cache.writeData({
        data: {
          count: {
            value: count.value - 1,
            __typename: 'Count'
          }
        }
      })
      return null
    },
    asyncIncrement: (_, args, { cache }) => {
      const { count } = cache.readQuery({ query: getCount })
      // mutations can be asynchronous
      return new Promise(resolve => {
        setTimeout(() => {
          cache.writeData({
            data: {
              count: {
                value: count.value + 1,
                __typename: 'Count'
              }
            }
          })
          resolve(null)
        }, 500)
      })
    },
    asyncDecrement: (_, args, { cache }) => {
      const { count } = cache.readQuery({ query: getCount })
      return new Promise(resolve => {
        setTimeout(() => {
          cache.writeData({
            data: {
              count: {
                value: count.value - 1,
                __typename: 'Count'
              }
            }
          })
          resolve(null)
        }, 500)
      })
    },
    addToCounter: (_, { toAdd }, { cache }) => {
      // You can extract specific arguments to the mutation
      // using object destructuring
      const { count } = cache.readQuery({ query: getCount })

      cache.writeData({
        data: {
          count: {
            value: count.value + toAdd,
            __typename: 'Count'
          }
        }
      })
      return null
    }
  }
}
