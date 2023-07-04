import { ajax } from '../http'
const website_s2 = '/website_s2'

// 获取资讯分类
export const categoryData = params => {
  return  ajax(`${website_s2}/outside/articleTypeList`,'POST',{ params })
}
// 获取资讯分类列表
export const articleData = params => {
  return  ajax(`${website_s2}/outside/articleList`,'POST',{ params })
}
// 获取资讯分类详情
export const articleDetail = params => {
  return  ajax(`${website_s2}/information/article/one`,'POST',{ params })
}
