import { ajax } from '../http'
const admin = '/official-website'

// 获取资讯分类
export const categoryData = params => {
  return  ajax(`${admin}/information/category`,'POST',{ params })
}
// 获取资讯分类列表
export const articleData = params => {
  return  ajax(`${admin}/information/article`,'POST',{ params })
}
// 获取资讯分类详情
export const articleDetail = params => {
  return  ajax(`${admin}/information/article/one`,'POST',{ params })
}
// 获取资讯首页
export const articleHome = params => {
  return  ajax(`${admin}/information/home`,'POST',{ params })
}