<template>
  <div>
    <h1>Count</h1>
    <h1>{{ count }}</h1>
    <h2>Doubled Count</h2>
    <h2>{{ count * 2 }}</h2>
  </div>
</template>

<script>
import { connect } from 'redux-zero/vue'

const mapToProps = ({ count }) => ({ count })

export default {
  name: 'CountDisplay',
  data () {
    return {
      count: 0
    }
  },
  created () {
    connect(this, this.$store, mapToProps)
  }
}
</script>

<style>

</style>
