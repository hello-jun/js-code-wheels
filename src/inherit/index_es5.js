function A(name) {
    this.name = name
}

A.prototype.showName = function(){
    console.log(A)
}

function B(name,age){
    this.age = age
}