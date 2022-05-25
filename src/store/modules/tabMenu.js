export default {
  namespaced: true,
  state: {
    menuData: {}, // 导航列表
    menuIndex: '', // 导航选中
  },
  mutations: {
    setMenuData(state, data) {
      state.menuData = data
      console.log('导航列表：state', state)
      console.log('导航列表：data', data)
    },
    setMenuIndex(state, data) {
      state.menuIndex = data
      console.log('导航选中：state', state)
      console.log('导航选中：data', data)
    }
  },
  getters: {

  },
  actions: {

  }
}