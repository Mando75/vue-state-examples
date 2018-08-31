<template>
<div>
  <button class="btn" id="increment" @click="increment">Increment</button>
  <button class="btn" id="asyncIncrement" @click="asyncIncrement">Async Increment</button>
</div>
</template>

<script>
import { connect } from 'redux-zero/vue'
import { actions } from '../actions'

const mapToProps = ({ count }) => ({ count })

export default {
  name: 'Increment',
  created () {
    connect(this, this.$store, mapToProps, actions)
  }
}
</script>

<style>

</style>
