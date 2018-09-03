<template>
<div>
  <!-- Each mutation should be wrapped in it's own ApolloMutation component -->
  <!-- Note: You could just add an apollo method to accomplish this, but I feel like -->
  <!-- This method is more declarative -->
  <ApolloMutation
    :mutation="increment">
    <template slot-scope="{mutate, error}">
      <button class="btn" id="increment" @click="mutate">Increment</button>
    </template>
  </ApolloMutation>
    <ApolloMutation
      :mutation="asyncIncrement">
      <template slot-scope="{mutate, error}">
        <button class="btn" id="asyncIncrement" @click="mutate">Async Increment</button>
      </template>
    </ApolloMutation>
</div>
</template>

<script>
import { gql } from 'apollo-boost'

export default {
  name: 'Increment',
  data () {
    // The @client directive must be used to instruct
    // Apollo to query the memcache instead of the network
    return {
      increment: gql`
        mutation {
          increment @client
        }
      `,
      asyncIncrement: gql`
        mutation {
          asyncIncrement @client
        }
      `
    }
  }
}
</script>

<style>

</style>
