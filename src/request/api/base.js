import { ajax } from '../http'
const website_s2 = '/website_s2'

// 获取网站信息
export const outsideInfo = params => {
    return  ajax(`${website_s2}/outside/info`,'POST',{ params })
}
