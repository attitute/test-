import Vue from 'vue'
import App from './App.vue'
import MetaInfo from 'vue-meta-info';
import router from './router'
import store from './vuex/store'
// 引入mockjs
require('./mock/index.js')

// 引入fastclick
import fastClick from 'fastclick'
// meteinfo 关键字
Vue.use(MetaInfo)
//使用faseclick
fastClick.attach(document.body)
// 你运行的Vue是开发模式。为生产部署时,请确保启用生产模式。
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
