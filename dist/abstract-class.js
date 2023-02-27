"use strict";
// * abstract class
// abstract class Person {
//     constructor(public name: string) {
//     }
//     display(): void {
//         console.log(this.name);
//     }
//     abstract find(string: string): Person;
// }
// class Employee extends Person {
//     constructor(public name: string, public code: number) {
//         super(name); // must call super()
//     }
//     find(name: string): Person {
//         return new Employee(name, 1);
//     }
// }
// let emp: Person = new Employee("James", 100);
// emp.display(); //James
// let emp2: Person = emp.find('Steve');
// console.log('emp2', emp2);
//* Abstract Class with Abstract Property
// abstract class Person {
//     abstract name: string;
//     display(): void {
//         console.log(this.name);
//     }
// }
// class Employee extends Person {
//     constructor(public name: string, public code: number) {
//         super(); // must call super()
//     }
// }
// let emp: Person = new Employee("James", 100);
// emp.display(); //James
