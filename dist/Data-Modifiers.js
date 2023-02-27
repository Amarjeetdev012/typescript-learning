"use strict";
// * public
// class Employee {
//     constructor(public empName: string, protected empCode: number) { }
// }
// class SalesEmployee extends Employee {
//     constructor(name: string, code: number, private department: string) {
//         super(name, code);
//     }
// }
// let emp = new SalesEmployee("John Smith", 123, "Sales");
// console.log('emp', emp);
// emp.empCode; //Compiler Error
// * readonly properties
// class Employee {
//     constructor(readonly empCode: number, public name: string) {
//     }
// }
// let emp = new Employee(10, "John");
// // emp.empCode = 20; //Compiler Error
// emp.name = 'Bill';
// console.log('emp', emp);
