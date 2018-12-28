import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/common.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from './api'
Vue.use(iView)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
var env = process.env.NODE_ENV
console.log(env)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
