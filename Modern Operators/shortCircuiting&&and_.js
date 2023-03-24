"use strict";

//Properties of logical operator:
//1. They can use and datatype
//2. They can return any datatype
//3. They do short-circuiting/short-ciruit evaluation

console.log(3 || "Jonas"); //output: 3
//so you see the result is 3 and so that means that the results of the OR operator doesn't always have to be a boolean
//so infact, here we used two values that are not booleans and it then returned a value that was not a boolean
//OR short circuiting: in the case of the OR operator short circuiting means that if the first value is a truthy value it will immediatedly return that first value 