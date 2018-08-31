<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>State Management Example: Vuex</h1>
    <hr>
    <CountDisplay />
    <div id="btn-wrapper">
      <Increment />
      <Decrement />
    </div>
  </div>
</template>

<script>
import CountDisplay from './components/CountDisplay'
import Increment from './components/Increment'
import Decrement from './components/Decrement'

export default {
  name: 'app',
  components: {
    CountDisplay,
    Increment,
    Decrement
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
