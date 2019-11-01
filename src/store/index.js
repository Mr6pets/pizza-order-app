import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//实例化vuex
export default new Vuex.Store({
  state: {//设置属性
    //定义一个属性
    menuItems: {},
    currentUser: null,
    isLogin: false
  },
  getters: {//设置属性状态
    getMenuItems: state => state.menuItems,
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
  },
  mutations: {//改变属性的状态
    setMunuItems(state, data) {//一个是状态 另外一个就是传递过来的数据
      state.menuItems = data
    },
    //将匹配到的对象，在menuItems数组中删除
    removeItmes(state, data) {
      state.menuItems.forEach((item, index) => {
        if (item == data)
          state.menuItems.splice(index, 1)
      });
    },
    //将新添加的pizza到属性menuItem中
    pushToMenuItems(state, data) {
      state.menuItems.push(data);
    },
    //更改用户的信息
    userStatus(state, user) {
      if (user) {
        state.currentUser = user
        state.isLogin = true
      } else {
        state.currentUser = null
        state.isLogin = null
      }
    }
  },
  actions: {//应用mutations
    setUser({ commit }, user) {
      commit("userStatus", user)
    }
  },
  modules: {
  }
})
