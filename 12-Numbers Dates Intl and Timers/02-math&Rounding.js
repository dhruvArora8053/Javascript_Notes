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
  Math.trunc(Math.random() * (max - min) + 1 + min);

console.log(randomInt(5, 20));

