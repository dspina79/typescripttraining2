// strings
var firstName = "Dean";
// numbers
var age = 40;
// any
var id;
// arrays
var myFriends = ["Brian", "Doug", "Sheryl"];
// constants
var DaysPerYear = 365.24;
var PI = 3.14159;
// enumerations
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
;
var myHeight = Sizes.Large;
// casting
var personName;
personName = "John";
// casting using <> notation
var isJohn = personName.toLowerCase() === "john";
console.log(isJohn);
