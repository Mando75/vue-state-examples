<template>
  <div>
    <input type="number" id="customInc" v-model.number="inputVal" :placeholder="inputVal" />
    <button class="btn" @click="addToCounter({toAdd: inputVal})">Add {{ inputVal || 0 }}</button>
  </div>
</template>

<script>
import { connect } from 'redux-zero/vue'
import { actions } from '../actions'

// Select which parts of the store this component will connect to
const mapToProps = ({ count }) => ({ count })

export default {
  name: 'CustomIncrement',
  data () {
    return {
      // Because this component does not actually display the count,
      // we do not need to include it in our data. If we were going to
      // use it in some other method, we would need to list it in the data

      // custom value to add
      inputVal: 0
    }
  },
  created () {
    connect(this, this.$store, mapToProps, actions)
  }
}
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
