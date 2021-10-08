"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(courseName, courseLength) {
        this._courseName = courseName;
        this._numMinutes = courseLength;
        this._description = '';
    }
    Object.defineProperty(Course.prototype, "CourseName", {
        get: function () {
            return this._courseName;
        },
        set: function (value) {
            this._courseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "CourseLength", {
        get: function () {
            return this._numMinutes;
        },
        set: function (value) {
            this._numMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "Description", {
        get: function () {
            var _a;
            return (_a = this._description) !== null && _a !== void 0 ? _a : '';
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
exports.Course = Course;
