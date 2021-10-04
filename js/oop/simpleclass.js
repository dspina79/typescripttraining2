var Person = /** @class */ (function () {
    function Person(f, l, age) {
        var _this = this;
        this.birthday = function () { return _this.age++; };
        this.outputFullName = function () { var _a; return console.log(_this.lastName + ", " + _this.firstName + " " + ((_a = _this.middleName) !== null && _a !== void 0 ? _a : "")); };
        this.outputWithAge = function () { return console.log(_this.firstName + " is " + _this.age + " years old."); };
        this.firstName = f;
        this.lastName = l;
        this.age = age;
    }
    return Person;
}());
var bill = new Person("Bill", "Sheridan", 30);
bill.outputWithAge(); // outputs "Bill is 30 years old."
// age Bill
bill.birthday();
bill.outputWithAge(); // outputs "Bill is 31 years old."
bill.outputFullName(); // outputs "Sheridan, Bill"
// set the middle name
bill.middleName = "Ryan";
bill.outputFullName();
