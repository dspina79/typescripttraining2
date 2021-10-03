var Person = /** @class */ (function () {
    function Person(f, l, age) {
        var _this = this;
        this.birthday = function () { return _this.age++; };
        this.outputWithAge = function () { return console.log(_this.firstName + " is " + _this.age + " years old."); };
        this.firstName = f;
        this.lastName = l;
        this.age = age;
    }
    return Person;
}());
var bill = new Person("Bill", "Sheridan", 30);
bill.outputWithAge(); // outputs
// age Bill
bill.birthday();
bill.outputWithAge(); // outputs
