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
        this.h = value;
    }

    get Width() {
        return this.w;
    }

    set Width(value) {
        this.w = value;
    }
}