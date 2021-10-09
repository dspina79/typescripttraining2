export class Course {
    private _courseName: string;
    private _numMinutes: number;
    private _description: string;

    constructor(courseName: string, courseLength: number) {
        this._courseName = courseName;
        this._numMinutes = courseLength;
        this._description = '';
    }

    get CourseName() {
        return this._courseName;
    }
    
    set CourseName(value) {
        this._courseName = value;
    }

    get CourseLength() {
        return this._numMinutes;
    }

    set CourseLength(value: number) {
        this._numMinutes = value;
    }

    get Description() {
        return this._description ?? '';
    }

    set Description(value: string) {
        this._description = value;
    }

    toString() {
        return this._courseName;
    }
}