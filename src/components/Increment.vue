<template>
<div>
  <button class="btn" id="increment" @click="increment">Increment</button>
  <button class="btn" id="asyncIncrement" @click="asyncIncrement">Async Increment</button>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
// these mapping functions will allow us to specify which
// actions/mutations we want to make available to the component
// Ideally you would never access mutations directly, instead
// you would use an action to fire them. This is just an example

export default {
  name: 'Increment',
  methods: {
    // using the spread operator so
    // we can have more custom local methods
    ...mapMutations(['increment']),
    ...mapActions(['asyncIncrement'])
  }
}
</script>

<style>

</style>
