"use strict";

//Hoisting with Variables:-
console.log(me); //undefined
//var variable has been hoisted but it has been hoisted to undefined

// console.log(job); //output: error (Cannot access 'job' before initialization)

// console.log(year); //output: error (Cannot access 'year' before initialization)

//The temporal dead zone of a variable declared with a let or a const starts from the beginning of current scope (in this case it is a global scope) until the point of the code where it is defined
//job and year right now are in the temporal dead zone

var me = "Jonas";
let job = "teacher";
const year = 1991;

//Hoisting with Functions:-
