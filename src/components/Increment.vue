<template>
<div>
  <button class="btn" id="increment" @click="store.count++">Increment</button>
  <button class="btn" id="asyncIncrement" @click="asyncIncrement">Async Increment</button>
</div>
</template>

<script>

export default {
  name: 'Increment',
  data () {
    return {
      store: this.$store
    }
  },
  methods: {
    asyncIncrement () {
      setTimeout(() => this.store.count++, 500)
    }
  }
}
</script>

<style>

</style>
