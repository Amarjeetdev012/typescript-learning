// interface IEmployee {
//     empCode: number;
//     empName: string;
// }

// let person: IEmployee = { empCode: 10, empName: 'hello' }
// console.log('person', person);

// interface KeyValueProcessor {
//     (key: number, value: string): void;
// };

// function addKeyValue(key: number, value: string): void {
//     console.log('addKeyValue: key = ' + key + ', value = ' + value)
// }

// function updateKeyValue(key: number, value: string): void {
//     console.log('updateKeyValue: key = ' + key + ', value = ' + value)
// }

// let kvp: KeyValueProcessor = addKeyValue;
// kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

// kvp = updateKeyValue;
// kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 

//* Array type
// interface NumList {
//     [index: number]: number
// }

// let numArr: NumList = [1, 2, 3, 4];
// numArr[0];
// numArr[1];

// console.log('numArr', numArr);

// interface IStringList {
//     [index: string]: string
// }

// let strArr: IStringList = { language: 'hindi' };
// strArr["TS"] = "TypeScript";
// strArr["JS"] = "JavaScript";

// console.log('strArr', strArr);

//* extending interface
// interface IPerson {
//     name: string;
//     gender: string;
// }

// interface IEmployee extends IPerson {
//     empCode: number;
// }

// let empObj: IEmployee = {
//     empCode: 1,
//     name: "Bill",
//     gender: "Male"
// }

// console.log('empObj', empObj);

// implements a interface
// interface IEmployee {
//     empCode: number;
//     name: string;
//     getSalary: (empCode: number) => number;
// }

// class Employee implements IEmployee {
//     constructor(public empCode: number, public name: string) { }
//     getSalary(empCode: number): number {
//         return 20000 + empCode
//     }
// }

// let emp = new Employee(1, "Steve");
// console.log('emp', emp);
// console.log('emp', emp.getSalary(200));
