import store from '@/store/index'

/**
 * desc：获取元素样式
 */
const getElement = (selector) => {
    const em = document.querySelector(selector)
    if (em) {
        return window.getComputedStyle(em);
    }
}

/**
 * desc：函数防抖
 * @param {函数} fn - 回调
 * @param {*数值} wait - 延迟回调
 */
const debounce = (fn,wait)=>{
    if(store.state.global.debounceTimer){
        clearTimeout(store.state.global.debounceTimer)
    }
    store.state.global.debounceTimer = setTimeout(fn,wait)
}


export {
    getElement,
    debounce
}