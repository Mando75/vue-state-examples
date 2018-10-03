<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>State Management Example: Basic Store</h1>
    <hr>
    <CountDisplay />
    <div id="btn-wrapper">
      <Increment />
      <Decrement />
    </div>
    <CustomIncrement />
  </div>
</template>

<script>
import CountDisplay from './components/CountDisplay'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import CustomIncrement from './components/CustomIncrement'
import store from './store'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    CountDisplay,
    Increment,
    Decrement,
    CustomIncrement
  },
  data () {
    return {
      store: this.$store
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 .btn {
  padding: 15px 20px;
  color: #2c3e50;
  background-color: #57cc8d;
  border-radius: 10px;
  box-shadow: 3px 2px 2px lightgrey;
  margin: 20px;
  font-size: 1.2em;
}
</style>
