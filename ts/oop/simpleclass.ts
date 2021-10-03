class Person {
    firstName: string;
    lastName: string;
    middleName?: string;
    age: number;

    constructor(f: string, l: string, age: number) {
        this.firstName = f;
        this.lastName = l;
        this.age = age;
    }

    birthday = () => this.age++;

    outputWithAge = () => console.log(`${this.firstName} is ${this.age} years old.`);
}

let bill = new Person("Bill", "Sheridan", 30);
bill.outputWithAge(); // outputs "Bill is 30 years old."
// age Bill
bill.birthday();
bill.outputWithAge(); // outputs "Bill is 31 years old."