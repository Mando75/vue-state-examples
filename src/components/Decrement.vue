<template>
<div>
  <button class="btn" id="decrement" @click="decrement">Decrement</button>
  <button class="btn" id="asyncDecrement" @click="asyncDecrement">Async Decrement</button>
</div>
</template>

<script>
import { connect } from 'vuelm'
import store from '../store'

const Decrement = {
  name: 'Decrement'
}

// connect the component to the store(s)
export default connect(Decrement, { store })
</script>

<style>

</style>
