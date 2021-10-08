"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("./course");
var c = new course_1.Course('Introduction to Programming', 55);
c.Description = 'A 101-level introduction to computing and basics of programming.';
var serializedData = JSON.stringify(c);
console.log(serializedData);
