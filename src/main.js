import Vue from 'vue'
import App from './App.vue'
import { provider } from './apollo/apolloProvider'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

Vue.use(VueApollo)

new Vue({
  apolloProvider: provider,
  render: h => h(App)
}).$mount('#app')
