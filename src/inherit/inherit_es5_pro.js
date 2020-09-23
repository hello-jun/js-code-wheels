function A3(name) {
    this.name = name
    this.hobby = 'ball'
}

A3.prototype.showName = function () {
    console.log('show Name ', this.name)
}

// A3 上的属性 ( 理解为class中的静态属性 )
A3.life = '100'
// A3 上的Symbol 属性
A3[sbKey] = 'sbKey' 

function B3(name, age) {
    A3.call(this,name)
    this.age = age
}

B3.prototype.showAge = function () {
    console.log('show Age ', this.age)
}

function extend(target,source){
    const targetType = typeof target
    const sourceType = typeof source
    if (targetType === 'undefined' || sourceType === 'undefined'
        || targetType !== 'function' || sourceType !== 'function'
    ) {
        console.warn('继承目标或者被继承目标只能是 function 类型')
        return null
    }
    // 1. 继承静态属性（包括方法）
    // 2. 继承 symbol 属性
    // 3. 改变原型链指向
    // 4. copy 原来原型上的属性方法
    const srcProps = Object.getOwnPropertyNames(source)
    const srcSymbols = Object.getOwnPropertySymbols(source)
    const targetProtoPropNames = Object.getOwnPropertyNames(target.prototype)
    const targetProtoProps = target.prototype


    srcProps.length && srcProps.forEach(prop=>{
        if (typeof target[prop] === 'undefined') {
            target[prop] = source[prop]
        }
    })
    srcSymbols.length && srcSymbols.forEach(symbol=>{
        if (typeof target[symbol] === 'undefined') {
            target[symbol] = source[symbol]
        }
    })

    target.prototype = Object.create(source.prototype)
    target.prototype.constructor = target

    targetProtoPropNames.length && targetProtoPropNames.forEach(prop=>{
        target.prototype[prop]=targetProtoProps[prop]
    })
}

extend(B3,A3)