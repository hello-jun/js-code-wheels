function A2(name) {
    this.name = name
    this.hobby = 'ball'
}

A2.prototype.showName = function () {
    console.log('show Name ', this.name)
}

function B2(name, age) {
    A2.call(this,name)
    this.age = age
}

Object.setPrototypeOf(B2.prototype,A2.prototype)
B2.prototype.showAge = function () {
    console.log('show Age ', this.age)
}