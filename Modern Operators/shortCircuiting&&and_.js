"use strict";

//Properties of logical operator:
//1. They can use and datatype
//2. They can return any datatype
//3. They do short-circuiting/short-ciruit evaluation

console.log(3 || "Jonas"); //output: 3
//so you see the result is 3 and so that means that the results of the OR operator doesn't always have to be a boolean
//so infact, here we used two values that are not booleans and it then returned a value that was not a boolean

//OR short circuiting: in the case of the OR operator short circuiting means that if the first value is a truthy value it will immediatedly return that first value so that's exactly what we see here with 3 which is a truthy value.

//So again if the first operand is truthy here in the OR operator then the other operand will not even be evaluated so javascript will not even take a look at it

console.log("" || "Jonas"); //output: Jonas
console.log(true || 0); //output: true

console.log(undefined || null); //output: null
//undefined is a falsy value and so then we go to the second operand so there's no short circuiting and so that's then the one that's gonna be returned. So here we in the output 'null' and that happens even though null is also a falsy value.
