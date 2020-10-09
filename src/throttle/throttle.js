/**
 *  节流函数-时间戳版
 *
 * @param {*} cb 回调函数
 * @param {number} [interval=500] 间隔时间，默认500ms
 * @param {*} thisArg 指定this参数，不指定的话 默认为 executor 被调用时的this指向
 * @returns
 */
function throttle(cb, interval=500,thisArg) {
    let lastTimestamp = Date.now()
    return function executor(...args) {
        const currentTimestamp = Date.now()
        if (currentTimestamp - lastTimestamp >= interval) {
            cb && cb.apply(typeof thisArg === 'undefined'? this: thisArg, args)
            lastTimestamp = currentTimestamp
        }
    }
}