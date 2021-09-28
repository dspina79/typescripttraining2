// using an interface to define a type

interface Person {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}

let outputPerson = (person: Person) => console.log(`${person.firstName} ${person.lastName}`);

let john = {
    firstName: "John",
    lastName: "Miller",
    email: "john@nowhere.net",
    age: 30
};

outputPerson(john); // outputs "John Miller"