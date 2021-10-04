 class Point {
     private x: number;
     private y: number;

     constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
     }

     calculateSlope = (otherPoint: Point) => (otherPoint.y - this.y) / (otherPoint.x - this.x);

}

let p1 = new Point(1, 2)
let p2 = new Point(4, 8)
console.log(`The slope between point 1 and point 2 is ${p1.calculateSlope(p2)}`);
// ^^^ outputs "The slope between point 1 and point 2 is 2"