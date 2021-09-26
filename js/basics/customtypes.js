// using a custom type for a method
// this uses inline annotation
var team = [];
var addPerson = function (person) { return team.push(person); };
addPerson({
    firstName: "Linda",
    lastName: "Sheridan"
});
console.log(team);
