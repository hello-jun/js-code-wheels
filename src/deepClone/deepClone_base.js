/**
 * 基础深拷贝
 *
 * @param {*} obj
 * @returns
 */
function deepCloneBase(obj) {
    // console.log(Object.prototype.toString.call(obj) ,obj)
    if ((typeof obj !== 'object' && typeof obj !== 'function') || obj === null) {
        return obj
    }
    const props = [...Object.getOwnPropertyNames(obj),...Object.getOwnPropertySymbols(obj)] 
    let result = Object.create(null)
    props.length && props.forEach(prop=>{
        result[prop] = deepCloneBase(obj[prop])
    })
    if(Array.isArray(obj)){
        result = Array.from(result)
    }
    return result
}