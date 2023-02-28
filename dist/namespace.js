"use strict";
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.myVar = "Hello, world!";
    function myFunc() {
        console.log(MyNamespace.myVar);
    }
    MyNamespace.myFunc = myFunc;
    class MyClass {
        constructor(privateVar) {
            this.myPrivateVar = privateVar;
        }
        getPrivateVar() {
            return this.myPrivateVar;
        }
        setPrivateVar(value) {
            this.myPrivateVar = value;
        }
    }
    MyNamespace.MyClass = MyClass;
})(MyNamespace || (MyNamespace = {}));
// Usage:
console.log(MyNamespace.myVar); // "Hello, world!"
MyNamespace.myFunc(); // logs "Hello, world!"
const myObj = {
    name: "John",
    age: 30
};
const myClassInstance = new MyNamespace.MyClass("private value");
console.log(myClassInstance.getPrivateVar()); // "private value"
myClassInstance.setPrivateVar("new value");
console.log(myClassInstance.getPrivateVar()); // "new value"
