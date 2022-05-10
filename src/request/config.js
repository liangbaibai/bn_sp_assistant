import axios from 'axios'
import NProgress from "nprogress";
import store from '@/store/index'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  //timeout: 15000 
})

// 请求拦截 
service.interceptors.request.use(
  config => {
    store.state.global.requestNum++
    if (store.state.global.requestNum > 0){//请求开始
      store.state.global.isEndRequest = false
      NProgress.start();
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截 
service.interceptors.response.use(
  response => {
    store.state.global.requestNum--
    if (store.state.global.requestNum <= 0) {//请求结束
      store.state.global.isEndRequest = true
      NProgress.done();
    }
    return response
  }, err => {
    store.state.global.requestNum--
    if (store.state.global.requestNum <= 0) {//请求结束
      store.state.global.isEndRequest = true
      NProgress.done();
    }
  }
)


export default service
