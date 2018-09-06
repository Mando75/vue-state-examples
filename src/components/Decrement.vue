<template>
<div>
  <button class="btn" id="decrement" @click="decrement">Decrement</button>
  <button class="btn" id="asyncDecrement" @click="asyncDecrement">Async Decrement</button>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
// These mapping functions allow us to specify which
// actions/mutations the component will have access t
// Ideally you would never access mutations directly, instead
// you would use an action to fire them. This is just an example

export default {
  name: 'Decrement',
  methods: {
    // Using the spread operator so we can
    // add more custom local methods
    ...mapMutations(['decrement']),
    ...mapActions(['asyncDecrement'])
  }
}
</script>

<style>

</style>
