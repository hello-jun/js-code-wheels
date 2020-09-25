/**
 * 防抖，指定this版
 * @param {*} cb 回调函数
 * @param {*} delay 延迟 默认500ms
 * @param {*} thisArg 指定this参数，不指定的话 默认为 executor 被调用时的this指向
 */
function debouncePro(cb,delay=500,thisArg) {
    let timer
    return function executor(...args){
        timer && clearTimeout(timer)
        timer = setTimeout(()=>{
            cb && cb.apply( typeof thisArg === 'undefined'? this: thisArg,args)
            clearTimeout(timer)
        },delay)
    }
}