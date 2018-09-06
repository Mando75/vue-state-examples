import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false
// prototype the store so it is available to the app

Vue.prototype.$store = store

new Vue({
  render: h => h(App)
}).$mount('#app')
