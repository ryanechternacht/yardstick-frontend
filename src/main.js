import Vue from 'vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from "./router";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

import '@/assets/yardstick.scss'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
