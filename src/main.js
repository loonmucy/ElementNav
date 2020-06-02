import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/common.css'
import router from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
// Vue.use(echarts)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
