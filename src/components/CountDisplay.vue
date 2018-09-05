<template>
  <div>
    <h1>Count</h1>
    <h1>{{ count }}</h1>
    <h2>Doubled Count</h2>
    <h2>{{ count * 2 }}</h2>
  </div>
</template>

<script>

import { connect } from 'vuelm'
import store from '../store'

const CountDisplay = {
  name: 'CountDisplay',
  data () {
    return {
      count: 0
    }
  }
}

// connect the component to the store(s)
export default connect(CountDisplay, { store })
</script>

<style>

</style>
