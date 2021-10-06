var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.h = height;
        this.w = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.h * this.w;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * this.h + 2 * this.w;
    };
    Object.defineProperty(Rectangle.prototype, "Height", {
        // properties
        get: function () {
            return this.h;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error('Cannot handle impossible values for dimensions.');
            }
            this.h = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Width", {
        get: function () {
            return this.w;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error('Cannot handle impossible values for dimensions.');
            }
            this.w = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.toString = function () {
        return "The area is " + this.getArea() + " and a perimeter equals " + this.getPerimeter() + ".";
    };
    return Rectangle;
}());
var rect = new Rectangle(7, 4);
console.log(rect.toString()); // outputs "The area is 28 and a perimeter equals 22."
