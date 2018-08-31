<template>
<div>
  <button class="btn" id="increment" @click="increment">Increment</button>
  <button class="btn" id="asyncIncrement" @click="asyncIncrement">Async Increment</button>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Increment',
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['asyncIncrement'])
  }
}
</script>

<style>

</style>
