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
    outputFullName = () => console.log(`${this.lastName}, ${this.firstName} ${this.middleName ?? ""}`)
    outputWithAge = () => console.log(`${this.firstName} is ${this.age} years old.`);
}

let bill = new Person("Bill", "Sheridan", 30);
bill.outputWithAge(); // outputs "Bill is 30 years old."
// age Bill
bill.birthday();
bill.outputWithAge(); // outputs "Bill is 31 years old."
bill.outputFullName(); // outputs "Sheridan, Bill"

// set the middle name
bill.middleName = "Ryan";
bill.outputFullName(); // outputs "Sheridan, Bill Ryan"