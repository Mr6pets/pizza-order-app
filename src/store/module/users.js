const state = {
  currentUser: null
}
const getters = {
  //设置属性状态
  currentUser: state => state.currentUser
}
const mutations = {
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
}
const actions = {
  //应用mutations
  setUser({ commit }, user) {
    commit("userStatus", user)
  },
}
export default {
  state,
  getters,
  mutations,
  actions
}