//  导入了 vue
import Vue from 'vue'
//  导入了组件 App.vue(根组件)   重要
import App from './App.vue'
//  导入了 路由
import router from './router'
//  导入了 vuex
import store from './store'
// 导入 Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

//  设置当前项目的模式:  非生产模式(开发模式,还没上线给用户体验)
Vue.config.productionTip = false

//  $mount('#app)的作用 将组件渲染到 视图上, 与vue实例中el 作用是一样的
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
