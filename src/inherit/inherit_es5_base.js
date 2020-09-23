function A2(name) {
    this.name = name
    this.hobby = 'ball'
}

A2.prototype.showName = function () {
    console.log('show Name ', this.name)
}

// A2 上的属性（理解为class中的静态属性）并不会被B2继承，这是此方案的遗漏点
A2.life = '100'
// A2 上的Symbol 属性
A2[sbKey] = 'sbKey'

function B2(name, age) {
    A2.call(this,name)
    this.age = age
}

B2.prototype.showAge = function () {
    console.log('show Age ', this.age)
}
// 使用此API直接更改原型会影响性能，但好处是不会丢失 constructor
// 也可以使用 Object.create 将B2 原型委托到新创建的对象上，但是需要重新指定 constructor
Object.setPrototypeOf(B2.prototype,A2.prototype)
