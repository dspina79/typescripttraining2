class Rectangle {
    private h: number;
    private w: number;

    constructor(height: number, width: number) {
        this.h = height;
        this.w = width;
    }

    getArea() {
        return this.h * this.w;
    }

    getPerimeter() {
        return 2 * this.h + 2 * this.w;
    }

    // properties
    get Height() {
        return this.h;
    }

    set Height(value) {
        if (value <= 0) {
            throw new Error('Cannot handle impossible values for dimensions.');
        }
        this.h = value;
    }

    get Width() {
        return this.w;
    }

    set Width(value) {
        if (value <= 0) {
            throw new Error('Cannot handle impossible values for dimensions.');
        }
        this.w = value;
    }

    toString() {
        return `The area is ${this.getArea()} and a perimeter equals ${this.getPerimeter()}.`
    }
}

let rect = new Rectangle(7, 4);
console.log(rect.toString()); // outputs "The area is 28 and a perimeter equals 22."