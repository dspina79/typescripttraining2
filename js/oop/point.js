var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.calculateSlope = function (otherPoint) { return (otherPoint.y - _this.y) / (otherPoint.x - _this.x); };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var p1 = new Point(1, 2);
var p2 = new Point(4, 8);
console.log("The slope between point 1 and point 2 is " + p1.calculateSlope(p2));
