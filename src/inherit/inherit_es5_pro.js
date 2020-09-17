function A2(name) {
    this.name = name
    this.hobby = 'ball'
}

A2.prototype.showName = function () {
    console.log('show Name ', this.name)
}

// A2 上的属性（理解为class中的静态属性
A2.life = '100'

function B2(name, age) {
    A2.call(this,name)
    this.age = age
}

B2.prototype.showAge = function () {
    console.log('show Age ', this.age)
}

function extends(target,source){
    const targetType = typeof target
    const sourceType = typeof source
    if (targetType === 'undefined' || sourceType === 'undefined'
        || targetType !== 'function' || source !== 'function'
    ) {
        console.warn('继承目标或者被继承目标只能是 function 类型')
        return null
    }
}

Object.setPrototypeOf(B2.prototype,A2.prototype)
