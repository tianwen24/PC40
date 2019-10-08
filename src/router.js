//  导入了 vue
import Vue from 'vue'
//  导入第三方包 vue-router
import Router from 'vue-router'
// 导入一个组件 Home
import Home from './views/Home.vue'

//  使用路由
Vue.use(Router)

// 创建并且导出一个 Router 对象
export default new Router({
  //  设置路由选项 (路径)
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
