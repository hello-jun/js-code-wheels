class A {
    constructor(name){
        this.name = name
        this.show()
    }
    show(){
        console.log('show A')
    }
}

class B extends A {
    constructor(name,age){
        super(name)
        this.age = age
        console.log('I am B')
    }
    show(){
        console.log('show B')
    }
}