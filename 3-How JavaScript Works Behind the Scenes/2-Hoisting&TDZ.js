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
console.log(addDecl(5, 5)); //output: 10

// console.log(addExpr(5, 5)); //output: error( Cannot access 'addExpr' before initialization)

// console.log(addArrow(5,5)); //output: error( Cannot access 'addArrow' before initialization)

//and so that's exactly the same error that we got before here with let and const variables and that's because these functions here right now are const variables too and so it means that it's now also in the temporal dead zone.

//function declaration:
function addDecl(a, b) {
  return a + b;
}

//function expression:
const addExpr = function (a, b) {
  return a + b;
};

//arrow function:
const addArrow = (a, b) => a + b;

// console.log(addExpr1(5, 5)); //output: error( addExpr1 is not a function)

// console.log(addArrow1(5,5)); //output: error( addArrow1 is not a function)

//the reason for different error message here is, so as you already know any variables declared with var will be hoisted and set to undefined and now this 'addExpr1' here is esentially that, it's a variable declared with var and so right now it is undefined and then here below we are trying to call undfined basically

console.log(addExpr1); //output: undefined
console.log(addArrow1); //output: undefined

//function expression:
var addExpr1 = function (a, b) {
  return a + b;
};

//arrow function:
var addArrow1 = (a, b) => a + b;

//Pitfall of Hoisting 
//example:
