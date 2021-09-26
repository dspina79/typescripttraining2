// strings
let firstName: string = "Dean";

// numbers
let age: number = 40;

// any
let id: any;

// arrays
let myFriends: string[] = ["Brian", "Doug", "Sheryl"];

// constants
const DaysPerYear: number = 365.24;
const PI: number = 3.14159;

// enumerations
enum Sizes {Small, Medium, Large};
let myHeight = Sizes.Large;

// casting
let personName;
personName = "John";
// casting using <> notation
const isJohn = (<string>personName).toLowerCase() === "john";
console.log(isJohn);