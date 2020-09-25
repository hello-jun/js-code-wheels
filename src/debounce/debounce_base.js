/**
 * 防抖——基础版
 * @param {*} cb 
 * @param {*} delay 
 */
function debounceBase(cb,delay=500) {
    let timer
    return function executor(...args){
        timer && clearTimeout(timer)
        timer = setTimeout(()=>{
            cb && cb.apply(this,args)
            clearTimeout(timer)
        },delay)
    }
}