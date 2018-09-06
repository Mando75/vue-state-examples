import Vue from 'vue'
import App from './App.vue'
import { store } from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
// Link the Vuex store to the Vue instance
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
