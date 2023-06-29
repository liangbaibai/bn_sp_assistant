import { ajax } from '../http'
const official_s2 = '/official_s2'

// 获取资讯分类
export const categoryData = params => {
  return  ajax(`${official_s2}/information/category`,'POST',{ params })
}
// 获取资讯分类列表
export const articleData = params => {
  return  ajax(`${official_s2}/information/article`,'POST',{ params })
}
// 获取资讯分类详情
export const articleDetail = params => {
  return  ajax(`${official_s2}/information/article/one`,'POST',{ params })
}
// 获取资讯首页
export const articleHome = params => {
  return  ajax(`${official_s2}/information/home`,'POST',{ params })
}
