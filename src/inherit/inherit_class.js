class A1 {
    constructor(name) {
        this.name = name
    }
    static life = '100'
    showName() {
        console.log('show Name ', this.name)
    }
    hobby = 'ball'
}

class B1 extends A1 {
    constructor(name, age) {
        super(name)
        this.age = age
    }
    showAge() {
        console.log('show Age ', this.age)
    }
}