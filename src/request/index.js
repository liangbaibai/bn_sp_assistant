import service from './config'

/**
 * 
 * @param {*对象} obj 请求配置
 * @param {*对象} resConfig 响应配置 (disableTip：是否自动提示响应结果；isRefTableList：是否刷新表格数据)
 */
const myRequest = (obj, resConfig) => {
  return new Promise((resolve, reject) => {
    service[obj.method || 'get'](obj.url, !obj.method || obj.method === 'get' ? {
      //config - get
      params: obj.data,
      headers: obj.headers
    } : obj.data, {
      headers: obj.headers || {
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      resolve(res)//then的回调
      if (res.data.code === '200') {//执行请求成功操作
        if (resConfig.isRefTableList) {
          resConfig.that['getDataList']()
        }
        resConfig.that[resConfig.modal] = false//隐藏的modal
        resConfig.that[resConfig.showModal] = true//显示的modal
        resConfig.that[resConfig.methodName]()
      }
    }).catch((err) => {
      reject(err)
    })
  })
}


export {
  myRequest
}
