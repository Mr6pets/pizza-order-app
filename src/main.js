import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
// 引入Vue-routerz这个路由模块
import VueRouter from 'vue-router'
//引入相应的组件
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

//使用VueRouter这个模块作为vue的插件使用
Vue.use(VueRouter);
//配置路由
const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu', name: "menuLink", component: Menu },
  {
    path: '/admin', name: "adminLink", component: Admin
    // ,beforeEnter: (to, from, next) => {
    //   // 路由独享守卫
    //   alert(to)
    // }
  },
  {
    path: '/about', name: "aboutLink", redirect: '/about/contact', component: About, children:
      [
        {
          path: '/about/contact', name: "contactLink", redirect: '/phone', component: Contact, children:
            [
              { path: "/phone", name: "phoneNumber", component: Phone },
              { path: "/personName", name: "personName", component: PersonName },
            ]
        },
        { path: '/history', name: "historyLink", component: History },
        { path: '/delivery', name: "deliveryLink", component: Delivery },
        { path: '/orderingGuide', name: "orderingGuideLink", component: OrderingGuide },
      ]
  },




  { path: '/login', name: "loginLink", component: Login },
  { path: '/register', name: "registerLink", component: Register },
  { path: '*', redirect: '/' }//重定向
]
//实例化一个router
const router = new VueRouter({
  routes,
  mode: "history"
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
