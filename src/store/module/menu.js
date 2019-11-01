const state = {
  menuItems: {}
}
const getters = {
  getMenuItems: state => state.menuItems
}
const mutations = {
  setMenuItems(state, data) {//一个是状态 另外一个就是传递过来的数据
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

}
const actions = {

}
export default {
  state,
  getters,
  mutations,
  actions
}