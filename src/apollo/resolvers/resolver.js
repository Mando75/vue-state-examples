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
          count: count + 1
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
          count: count - 1
        }
      })
      return null
    },
    asyncIncrement: (_, args, { cache }) => {
      // mutations can be asynchronous
      return new Promise(resolve => {
        setTimeout(() => {
          const { count } = cache.readQuery({ query: getCount })
          cache.writeData({
            data: {
              count: count + 1
            }
          })
          resolve(null)
        }, 500)
      })
    },
    asyncDecrement: (_, args, { cache }) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const { count } = cache.readQuery({ query: getCount })
          cache.writeData({
            data: {
              count: count - 1
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
          count: count + toAdd
        }
      })
      return null
    }
  }
}
