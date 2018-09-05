<template>
  <div>
    <input type="number" id="customInc" v-model.number="inputVal" :placeholder="inputVal" />
    <button class="btn" @click="addToCounter({toAdd: inputVal})">Add {{ inputVal || 0 }}</button>
  </div>
</template>

<script>
import { connect } from 'vuelm'
import store from '../store'

const CustomIncrement = {
  name: 'CustomIncrement',
  data () {
    return {
      inputVal: 0
    }
  }
}

// connect the component to the store(s)
export default connect(CustomIncrement, { store })
</script>

<style>
#customInc {
  height: 30px;
  width: 75px;
  border-radius: 5px;
  margin: 8px;
  background-color: whitesmoke;
  color: black;
  font-size: 1.2em
}
</style>
