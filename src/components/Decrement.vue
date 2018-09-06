<template>
<div>
  <button class="btn" id="decrement" @click="store.count--">Decrement</button>
  <button class="btn" id="asyncDecrement" @click="asyncDecrement">Async Decrement</button>
</div>
</template>

<script>
export default {
  name: 'Decrement',
  data () {
    return {
      store: this.$store
    }
  },
  methods: {
    asyncDecrement () {
      setTimeout(() => this.store.count--, 500)
    }
  }
}
</script>

<style>

</style>
