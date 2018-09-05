<template>
<div>
  <button class="btn" id="increment" @click="increment">Increment</button>
  <button class="btn" id="asyncIncrement" @click="asyncIncrement">Async Increment</button>
</div>
</template>

<script>
import { connect } from 'vuelm'
import store from '../store'

const Increment = {
  name: 'Increment'
}

// connect the component to the store(s)
export default connect(Increment, { store })
</script>

<style>

</style>
