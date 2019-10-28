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

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/orderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

//使用VueRouter这个模块作为vue的插件使用
Vue.use(VueRouter);
//配置路由
const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu', name: "menuLink", component: Menu },
  { path: '/admin', name: "adminLink", component: Admin },
  {
    path: '/about', name: "aboutLink", redirect: '/about/contact', component: About, children:
      [
        {
          path: '/about/contact', name: "contactLink", redirect: '/about/contact/phoneNumber', component: Contact, children:
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

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
