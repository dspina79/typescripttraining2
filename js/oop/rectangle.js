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
            this.w = value;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
