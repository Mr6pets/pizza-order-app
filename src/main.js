import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import router from './router'
// 引入Vue-routerz这个路由模块
import VueRouter from 'vue-router'
import axios from 'axios'
//引入公开的routes
import { routes } from './routes'
//使用VueRouter这个模块作为vue的插件使用
Vue.use(VueRouter);
axios.defaults.baseURL = "https://pizza-app-7e986.firebaseio.com/"
//实例化一个router
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 100 }
    // return { selector: '.btn' }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
//全局守卫
// router.beforeEach((to, from, next) => {
//   //to:到那边去 from:从那边离开 next函数
//   // alert("还没有登陆，请先登陆");
//   // next()
//   if (to.path == "/login" || top.path == "/register") {
//     next();
//   } else {
//     alert("还没有登陆，请先登陆")
//     next('/login')
//   }
//   //判断登陆状况store.gettes.isLogin==false;

// })

//后置钩子
// router.afterEach((to, from) => {
//   //进入组件之后,执行

// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
