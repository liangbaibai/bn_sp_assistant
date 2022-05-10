
const state = {

    baseUrl: process.env.VUE_APP_BASE_API,//基础请求路径
    requestNum:0,//api并发请求数
    isEndRequest:true,//是否结束请求（全局检测某一时机的请求）

    openMenu:false,
    headerH:0,

    homeC:null,//首页数据
    oneMenuTitle:'',
    tempHTitle:'',

    hasHomeC:false,

    debounceTimer:null
};

const mutations = {
    

};

const actions = {
   
};

export default {
    namespaced: true,  //允许命名store模块
    state,
    mutations,
    actions
};