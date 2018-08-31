<template>
  <div>
    <input type="number" id="customInc" v-model.number="inputVal" :placeholder="inputVal" />
    <button class="btn" @click="addToCounter({toAdd: inputVal})">Add {{ inputVal || 0 }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CustomIncrement',
  data () {
    return {
      inputVal: 0
    }
  },
  methods: {
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
