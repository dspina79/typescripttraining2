// using a custom type for a method
// this uses inline annotation

let team: any[] = [];

let addPerson = (person: {firstName: string, lastName: string}) => team.push(person);

addPerson({
    firstName: "Linda",
    lastName: "Sheridan"
});

console.log(team);
