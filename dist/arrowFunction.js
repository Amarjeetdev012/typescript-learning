"use strict";
class Employee {
    constructor(code, name) {
        this.code = code;
        this.name = name;
        this.display = () => console.log(this.code + ' ' + this.name);
    }
}
let emp = new Employee(1, 'Ram');
emp.display();
//# sourceMappingURL=arrowFunction.js.map