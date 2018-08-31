<template>
<div>
  <button class="btn" id="decrement" @click="decrement">Decrement</button>
  <button class="btn" id="asyncDecrement" @click="asyncDecrement">Async Decrement</button>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Decrement',
  methods: {
    ...mapMutations(['decrement']),
    ...mapActions(['asyncDecrement'])
  }
}
</script>

<style>

</style>
