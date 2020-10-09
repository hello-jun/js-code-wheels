/**
 *  节流函数-定时器版
 *
 * @param {*} cb 回调函数
 * @param {number} [interval=500] 间隔时间，默认500ms
 * @param {*} thisArg 指定this参数，不指定的话 默认为 executor 被调用时的this指向
 * @returns
 */
function throttleTimer(cb, interval = 500, thisArg) {
    let timer = null
    let threshold = true
    return function executor(...args) {
        if (threshold) {
            cb && cb.apply(typeof thisArg === 'undefined' ? this : thisArg, args)
            threshold = false
            timer && clearTimeout(timer)
            timer = null
            if (!timer) {
                timer = setTimeout(() => {
                    threshold = true
                }, interval)
            }
        }
    }
}