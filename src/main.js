import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import {injectGlobal} from './common/inject'
import './style/reset.less'
import './filters/filter'
//全局注入
injectGlobal()

Vue.config.productionTip = false
const globalVue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.globalVue = globalVue;
