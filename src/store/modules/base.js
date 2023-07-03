import { outsideContent } from '@/request/api/base'
export default {
  namespaced: true,   //允许命名store模块
  state: {
    contentMenuId: null, // 菜单ID
    contentData: [], // 内容模块
  },
  mutations: {
    setMenuId(state, data) {
      console.log('socket接收的数据：state', state)
      console.log('socket接收的数据：data', data)
      state.contentMenuId = data
    },
  },
  actions: {
    // 获取内容模块
    setContentData({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        const params = {
          contentMenuId: state.contentMenuId, // 	菜单id
          platform: 1, //  平台: 1.pc电脑 2.mp手机
        }
        outsideContent(params).then(res => {
          console.warn('获取内容模块：',res)
        })
      })
    }
  }
}
