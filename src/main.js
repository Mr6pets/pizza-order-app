import Vue from 'vue'
import App from './App.vue'
//引入vuex
import store from './store'
// import router from './router'
// 引入Vue-routerz这个路由模块
import VueRouter from 'vue-router'
import axios from 'axios'

//引入公开的routes
import { routes } from './routes'
//使用VueRouter这个模块作为vue的插件使用
Vue.use(VueRouter);
//配置了默认根路径是firebase的数据库
axios.defaults.baseURL = "https://pizza-app-7e986.firebaseio.com/"

//配置Vue原型(可以在任何一个组件中使用axios)
// Vue.prototype.$axios = axios; //或者下面都可以 $axios or http可以随意命名
Vue.prototype.http = axios;

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
