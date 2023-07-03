import { ajax } from '../http'
const website_s2 = '/website_s2'

// 获取网站信息
export const outsideInfo = params => {
    return  ajax(`${website_s2}/outside/info`,'POST',{ params })
}
// 获取网站菜单列表
export const navigationList = params => {
    return  ajax(`${website_s2}/outside/navigationList`,'POST',{ params })
}
// 获取网站视频列表
export const outsideVideo = params => {
    return  ajax(`${website_s2}/outside/video`,'POST',{ params })
}
// 访问记录
export const outsideRecord = params => {
    return  ajax(`${website_s2}/outside/record`,'POST',{ params })
}
// 轮播图
export const outsideImageList = params => {
    return  ajax(`${website_s2}/outside/imageList`,'POST',{ params })
}
// 文章类型
export const articleTypeList = params => {
    return  ajax(`${website_s2}/article/type/list`,'POST',{ params })
}
// 文章列表
export const outsideArticleList = params => {
    return  ajax(`${website_s2}/outside/articleList`,'POST',{ params })
}
// 内容模块
export const outsideContent = params => {
    return  ajax(`${website_s2}/outside/content`,'POST',{ params })
}
