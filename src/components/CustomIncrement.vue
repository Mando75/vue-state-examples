<template>
  <div>
    <input type="number" id="customInc" v-model.number="inputVal" :placeholder="inputVal" />
    <button class="btn" @click="addToCounter({toAdd: inputVal})">Add {{ inputVal || 0 }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// this mapping function allows us to specify which
// actions our component has access to

export default {
  name: 'CustomIncrement',
  data () {
    return {
      inputVal: 0
    }
  },
  methods: {
    // Use the spread syntax so we can still add
    // our own custom local methods
    ...mapActions(['addToCounter'])
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
