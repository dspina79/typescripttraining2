import { Course } from './course';

let c = new Course('Introduction to Programming', 55);
c.Description = 'A 101-level introduction to computing and basics of programming.';
let serializedData = JSON.stringify(c);
console.log(serializedData);