"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
function display(per) {
    console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates
// display("Bill Gates");//Compiler Error
