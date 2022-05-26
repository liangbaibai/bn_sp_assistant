import axios from 'axios'
import NProgress from 'nprogress';
import router from '@/router/index';
import store from '@/store/index'
import { messageTip } from '@/utils/util'
import el from "element-ui/src/locale/lang/el";

// service 循环遍历输出不同的请求方法
let instance = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
})
function getBaseUrl() {
  console.log('环境:NODE_ENV', process.env.NODE_ENV)
  switch (process.env.NODE_ENV) {
    case 'development': return ''
    case 'testing': return 'http://192.168.10.195/'
    case 'beta': return 'https://www.bainianyang.com'
    case 'production': return 'https://www.bainianyang.com'
    default : return 'http://192.168.10.195/'
  }
}
// 拦截器的添加
// 请求拦截器
instance.interceptors.request.use(config=>{
  // 发起请求前做些什么
  startRequest()
  return config
},(err)=>{
  console.log('捕获请求拦截器：报错', err)
  // 请求错误
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use(res=>{
  console.log('获取响应数据：成功', res)
  if (res.data.code === 120) {  //登录过期
    router.push({
      path: `/login`,
    });
  }
  endRequest()
  return res
},err =>{
  console.log('捕获响应数据：失败', err.response)
  endRequest()
  cancelRequestType(err)
})

//请求开始
const startRequest = () => {
  store.state.global.requestNum++
  if (store.state.global.requestNum > 0) {//请求开始
    store.state.global.isEndRequest = false
    NProgress.start();
  }
}


//请求结束
const endRequest = () => {
  store.state.global.requestNum--
  if (store.state.global.requestNum <= 0) {//请求结束
    store.state.global.isEndRequest = true
    NProgress.done();
  }
}

//结束请求类型
const cancelRequestType = (err) => {
  console.log('请求错误:err', err)
  if (err?.message === 'interrupt') { //强行中断
    return
  } else {
    if (err.response.data.detail.length > 0) {
      if (err.response.data.detail.indexOf('密码不正确') != -1) {
        messageTip({
          message: err.response.data.detail,
          type: 'warning'
        })
      } else {
        messageTip({
          message: err.response.data.detail,
          type: 'warning'
        })
        router.push({
          path: `/noNetWork`,
        });
      }
    } else {
      messageTip({
        message: '请求错误',
        type: 'warning'
      })
      router.push({
        path: `/noNetWork`,
      });
    }
  }
}
export const ajax = function (url, method, { params = {}, headers = {}, responseType, otherConfig = {}} = {}) {
  return new Promise((resolve, reject) => {
    try {
      const headers = {
        'Content-Type': 'application/json'
      }
      const configs = { timeout: 90000, url, method: method, headers,responseType, ...otherConfig }
      if (method === 'GET' || method === 'DELETE') {
        configs.params = params
        configs.data = { unused: 0 }
      } else {
        configs.data = params
      }
      console.log('接口请求参数：', configs)
      instance(configs).then(res => {
        console.log('接口请求成功返回：', res)
        if (configs.params) {
          if (res.status !== 200 || res.status === 502 || res.status === 504) {
            console.log('接口请求成功-返回失败')
            messageTip({
              message: '请求错误',
              type: 'warning'
            })
            return ''
          }
          return resolve(res.data)
        }
        if (res.data.code === 10500 || res.data.code === 400) {
          // 获取新的token失败
          console.log('获取新的token失败')
          return resolve(res.data)
        } else if (res.data.code == 120) {
          messageTip({
            message: res.data.msg,
            type: 'warning'
          })
        } else {
          return resolve(res.data)
        }
        return ''
      }).catch((event) => {
        console.log('接口失败返回：', event)
      })
    } catch (e) {
      console.log('接口：catch', e)
      reject(e)
    }
  })
}