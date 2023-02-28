class Person {
    constructor(public firstName: string, public lastName: string) {
    }
}

function display<T extends Person>(per: T): void {
    console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

// display("Bill Gates");//Compiler Error