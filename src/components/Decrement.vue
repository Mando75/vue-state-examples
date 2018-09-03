<template>
<div>
  <!-- Each mutation should be wrapped in it's own ApolloMutation component -->
  <!-- Note: You could just add an apollo method to accomplish this, but I feel like -->
  <!-- This method is more declarative -->
  <ApolloMutation :mutation="decrement">
    <template slot-scope="{ mutate, error }">
      <button class="btn" id="decrement" @click="mutate">Decrement</button>
    </template>
  </ApolloMutation>
  <ApolloMutation :mutation="asyncDecrement">
    <template slot-scope="{ mutate, error }">
      <button class="btn" id="asyncDecrement" @click="mutate">Async Decrement</button>
    </template>
  </ApolloMutation>
</div>
</template>

<script>
import { gql } from 'apollo-boost'

export default {
  name: 'Decrement',
  data () {
    // The @client directive must be used to instruct
    // Apollo to query the memcache instead of the network
    return {
      decrement: gql`
        mutation {
          decrement @client
      }`,
      asyncDecrement: gql`
        mutation {
          asyncDecrement @client
        }
      `
    }
  }
}
</script>

<style>

</style>
