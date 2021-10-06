"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(_name) {
        this._name = _name;
    }
    Dog.prototype.bark = function () {
        console.log(this._name + " is barking.");
    };
    Object.defineProperty(Dog.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
exports.Dog = Dog;
