import VueApollo from 'vue-apollo'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { withClientState } from 'apollo-link-state'
import { resolvers } from './resolvers/resolver'

// create a new cache
const cache = new InMemoryCache()

// Create a new clientState, including the default values
const link = withClientState({
  cache,
  resolvers,
  defaults: {
    count: 0
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
