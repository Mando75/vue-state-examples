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

// Select which parts of the store this component will connect to
const mapToProps = ({ count }) => ({ count })

export default {
  name: 'CountDisplay',
  data () {
    return {
      // the property to be connected to the store must be defined
      // in the data if we want to use it in the component or component methods
      count: 0
    }
  },
  created () {
    // connect the component to the store
    connect(this, this.$store, mapToProps)
  }
}
</script>

<style>

</style>
