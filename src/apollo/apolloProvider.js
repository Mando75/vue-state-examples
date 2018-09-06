import VueApollo from 'vue-apollo'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { withClientState } from 'apollo-link-state'
import { resolvers } from './resolvers/resolver'

// create a new cache
const cache = new InMemoryCache()

// Create a new clientState, including the default values
// If there is a client side type, a typename field must be included
// for apollo to correctly cache updates
const link = withClientState({
  cache,
  resolvers,
  defaults: {
    count: 0,
    exampleClientType: {
      value: 'someValue',
      id: 'someID',
      __typename: 'exampleClientType'
    }
  }
})

// Use the cache and clientState link to create a new ApolloClient
const client = new ApolloClient({
  cache, link, connectToDevTools: true
})

// Provide this client to VueApollo
export const provider = new VueApollo({
  defaultClient: client
})
