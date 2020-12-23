import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "normalize.css";
import mandMobile from 'mand-mobile/lib/mand-mobile.esm'
import 'mand-mobile/lib/mand-mobile.css'
import store from './store'

Vue.use(mandMobile)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
