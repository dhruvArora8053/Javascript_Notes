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
//functions declared with let or const:
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

//functions declared with var:
// console.log(addExpr1(5, 5)); //output: error( addExpr1 is not a function)

// console.log(addArrow1(5,5)); //output: error( addArrow1 is not a function)

//the reason for different error message here is, so as you already know any variables declared with var will be hoisted and set to undefined and now this 'addExpr1' here is esentially that, it's a variable declared with var and so right now it is undefined and then here below we are trying to call undefined basically

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
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
//here we get all products deleted even though numProducts is actually 10 so why did that happen?
//well it's because of hoisting, at above on if statement the value of numProduct is undefined and '!' this makes it true so our function got executed

//Best Practices:
//1. just don't use var to declare variables
//2. use const variable most of the time
//3. use let if you really need to change that variable later
//4. also inorder to write clean code you should declare your variables at the top of each scope
//5. and finally always declare all your functions first and use them only after declaration this even applies for function declarations.

//Another difference between var and let or const:
var x = 1;
let y = 2;
const z = 3;

console.log(window); //window is the global object of javascript in the browser
//var: is the property of window object
//let or const: not a property of window object

console.log(x===window.x); //output: true
console.log(y===window.y); //output: false
console.log(z===window.z); //output: false
