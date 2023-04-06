"use strict";

//already learnt:
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//new ways:
const x = new Array(7);
console.log(x);
//it creates a new array with seven empty elements and also we cannot really use this x array for anything for ex: we cannot call the map() method on it to fill it up:
console.log(x.map(() => 5));
x.map(() => 5);
//nothing happened

//Empty Arrays + Fill Method:
//there is one method that we can call on this empty array and that is the fill() method: it mutates the array:
console.log(x.fill(1));
console.log(x);

const y = new Array(7);
y.fill(1, 3, 5);
//just like slice the last element won't be added
console.log(y);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.fill(23, 4, 6);
console.log(arr);
