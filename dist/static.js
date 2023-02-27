"use strict";
// ! The static members of a class are accessed using the class name and dot notation, without creating an object
// class Circle {
//     static pi: number = 3.14;
// }
// console.log('Circle.pi', Circle.pi);
// *example 2
// class Circle {
//     static pi: number = 3.14;
//     static calculateArea(radius: number) {
//         return this.pi * radius * radius;
//     }
// }
// console.log(Circle.pi); // returns 3.14);
// console.log(Circle.calculateArea(5)); // returns 78.5);
// todo static and non -static member
// class Circle {
//     static pi = 3.14;
//     pi = 3;
// }
// console.log(Circle.pi); // returns 3.14);
// let circleObj = new Circle();
// console.log(circleObj.pi); // returns 3);
// * Example: Static and Non-static Members
class Circle {
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    calculateCircumference(radius) {
        return 2 * Circle.pi * radius;
    }
}
Circle.pi = 3.14;
console.log(Circle.calculateArea(5)); // returns 78.5);
let circleObj = new Circle();
console.log(circleObj.calculateCircumference(5)); // returns 31.4000000);
// circleObj.calculateArea();// <-- cannot call this
