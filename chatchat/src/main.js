import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'

// 本地化，中文时间显示
moment.locale('zh-cn')

Vue.prototype.$moment = moment
Vue.prototype.$random = n => Math.floor(n*Math.random())

Vue.use(Vuex);
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
