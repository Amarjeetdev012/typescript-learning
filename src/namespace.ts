namespace MyNamespace {
    export const myVar = "Hello, world!";
  
    export function myFunc() {
      console.log(myVar);
    }
  
    export interface MyInterface {
      name: string;
      age: number;
    }
  
    export class MyClass {
      private myPrivateVar: string;
  
      constructor(privateVar: string) {
        this.myPrivateVar = privateVar;
      }
  
      public getPrivateVar() {
        return this.myPrivateVar;
      }
  
      public setPrivateVar(value: string) {
        this.myPrivateVar = value;
      }
    }
  }
  
  // Usage:
  
  console.log(MyNamespace.myVar); // "Hello, world!"
  
  MyNamespace.myFunc(); // logs "Hello, world!"
  
  const myObj: MyNamespace.MyInterface = {
    name: "John",
    age: 30
  };
  
  const myClassInstance = new MyNamespace.MyClass("private value");
  console.log(myClassInstance.getPrivateVar()); // "private value"
  myClassInstance.setPrivateVar("new value");
  console.log(myClassInstance.getPrivateVar()); // "new value"
  