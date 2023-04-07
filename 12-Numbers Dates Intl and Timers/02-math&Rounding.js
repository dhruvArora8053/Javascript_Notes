"use strict";

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, "23", 11, 2)); //23, it does type coercion
console.log(Math.max(5, 18, "23px", 11, 2)); //NaN, it doesn't do parsing

console.log(Math.min(5, 18, 23, 11, 2)); //2

console.log(Math.PI); //3.141
console.log(Math.PI * Number.parseFloat("10px") ** 2); //this is howe we calculate the area of a circle with above 10px of a radius

console.log(Math.trunc(Math.random() * 6 + 1));
//Math.random()--> 0 and 1

//Using Math.random() to generate random integers between two values:
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1 + min);

console.log(randomInt(5, 20));

//Rounding integers:
console.log(Math.trunc(23.3)); //23
//this one simply remove any decimal part

console.log(Math.round(23.3)); //23
console.log(Math.round(23.4)); //23
console.log(Math.round(23.5)); //24
console.log(Math.round(23.6)); //24
//this one always rounds to the nearest integer

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24
//this one basically round up

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23
// this one basically round down

//and remember these methods also does type coercion:
console.log(Math.floor("23.3")); //23

//Now you might think that floor and trunc are very similar and indeed they do the same when we are dealing with positive numbers so basically floor and trunc both cut off the decimal part when we are dealing with positive numbers however, for negative numbers it doens't work this way
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

//Rounding Decimals:
console.log((2.7).toFixed(0)); //3,it returns string
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
//to convert to number:
console.log(+(2.345).toFixed(2));
//so here they all are nubmers so they are primitives right and primitives actually don't have methods and so behind the scenes javascript will do boxing and boxing is to basically to transform this to a number object then call the method on that object and once the operation is finished it will convert it back to primitive

//Half Part: Bankist app: 1. round the requested loan amount, 2. toFixed on display() functions
 