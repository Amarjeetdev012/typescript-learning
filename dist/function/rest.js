"use strict";
let Greet = (greeting, ...names) => {
    return greeting + " " + names.join(", ") + "!";
};
console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!");
console.log(Greet("Hello")); // returns "Hello !");
