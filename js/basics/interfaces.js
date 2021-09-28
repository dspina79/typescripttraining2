// using an interface to define a type
var outputPerson = function (person) { return console.log(person.firstName + " " + person.lastName); };
var john = {
    firstName: "John",
    lastName: "Miller",
    email: "john@nowhere.net",
    age: 30
};
outputPerson(john);
