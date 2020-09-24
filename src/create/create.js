/* 15.2.3.5Object.create ( O [, Properties] )
The create function creates a new object with a specified prototype. When the create function is called, the following steps are taken:

If Type(O) is not Object or Null throw a TypeError exception.
Let obj be the result of creating a new object as if by the expression new Object() where Object is the standard built-in constructor with that name
Set the [[Prototype]] internal property of obj to O.
If the argument Properties is present and not undefined, add own properties to obj as if by calling the standard built-in function Object.defineProperties with arguments obj and Properties.
Return obj. 
规范地址：https://www.ecma-international.org/ecma-262/5.1/#sec-15.2.3.5  ES5新增
*/

// Attention： 此处代码并非 polyfill, 仅基于>=ES5实现 create
if (typeof Object.create !== 'function') {
    Object.create = function create(prototype,propertiesObject) {
        if (typeof prototype !== 'function' && typeof prototype !== 'object') {
            throw new TypeError('第一个参数类型必须是 Object 或者 Null')
        }
        let obj
        function Type(){}
        

    }
}