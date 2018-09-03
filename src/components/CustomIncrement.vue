<template>
  <div>
    <!-- Wrap your mutations in the ApolloMutation component -->
    <ApolloMutation
      :mutation="addToCount"
      :variables="{
        toAdd: inputVal
      }">
      <template slot-scope="{ mutate, error }">
        <!-- mutate is the function that will initiate the graphQL mutation call -->
        <input type="number" id="customInc" v-model.number="inputVal" :placeholder="inputVal" />
        <button class="btn" @click="mutate">Add {{ inputVal || 0 }}</button>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import { gql } from 'apollo-boost'

export default {
  name: 'CustomIncrement',
  data () {
    return {
      inputVal: 0,
      // The @client directive must be used to instruct
      // Apollo to query the memcache instead of the network
      addToCount: gql`
        mutation addToCount($toAdd: Integer!) {
          addToCounter(toAdd: $toAdd) @client
        }
      `
    }
  }
}
</script>

<style>
#customInc {
  height: 30px;
  width: 75px;
  border-radius: 5px;
  margin: 8px;
  background-color: whitesmoke;
  color: black;
  font-size: 1.2em
}
</style>
