<template>
<div>
  <button class="btn" id="decrement" @click="decrement">Decrement</button>
  <button class="btn" id="asyncDecrement" @click="asyncDecrement">Async Decrement</button>
</div>
</template>

<script>
// see CustomIncrement for explanation

import { connect } from 'redux-zero/vue'
import { actions } from '../actions'

const mapToProps = ({ count }) => ({ count })

export default {
  name: 'Decrement',
  created () {
    connect(this, this.$store, mapToProps, actions)
  }
}
</script>

<style>

</style>
