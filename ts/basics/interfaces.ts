// using an interface to define a type

interface Person {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    speak: () => void
}

let outputPerson = (person: Person) => console.log(`${person.firstName} ${person.lastName}`);
let outputPersonWithAge = (person: Person) => console.log(`${person.firstName} is ${person.age}`);
let john = {
    firstName: "John",
    lastName: "Miller",
    email: "john@nowhere.net",
    age: 30,
    speak: () => console.log("Hello")
};

outputPerson(john); // outputs "John Miller"
outputPersonWithAge(john); // outputs "John is 30"
john.speak(); // outputs "Hello"