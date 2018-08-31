import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store
console.log(store.getState())
new Vue({
  render: h => h(App)
}).$mount('#app')
