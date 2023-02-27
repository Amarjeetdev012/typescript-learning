"use strict";
class Employee {
    constructor(code, name) {
        this.display = () => console.log(this.empCode + ' ' + this.empName);
        this.empName = name;
        this.empCode = code;
    }
}
let emp = new Employee(1, 'Ram');
emp.display();
//# sourceMappingURL=arriwFunction.js.map