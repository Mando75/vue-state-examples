<template>
  <div>
    <h1>Count</h1>
    <h1>{{ store.count }}</h1>
    <h2>Doubled Count</h2>
    <h2>{{ store.count * 2 }}</h2>
  </div>
</template>

<script>

export default {
  name: 'CountDisplay',
  data () {
    return {
      store: this.$store
    }
  }
}
</script>

<style>

</style>
