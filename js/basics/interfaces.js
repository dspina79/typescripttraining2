// using an interface to define a type
var outputPerson = function (person) { return console.log(person.firstName + " " + person.lastName); };
var outputPersonWithAge = function (person) { return console.log(person.firstName + " is " + person.age); };
var john = {
    firstName: "John",
    lastName: "Miller",
    email: "john@nowhere.net",
    age: 30,
    speak: function () { return console.log("Hello"); }
};
outputPerson(john); // outputs "John Miller"
outputPersonWithAge(john);
john.speak();
