"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//sort method: it mutates the original array
//with strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];

console.log(owners.sort());
//it sorted alphabetically
console.log(owners);

//with numbers
console.log(movements);
// console.log(movements.sort());
//this time the result is not really what we are expecting, these numbers are not at all ordered in any way and the reason for this is that the sort method does the sorting based on strings. So basically what it does is to convert everything to strings and then it does the sorting itself and if we look at the results as if they were strings then the result actually makes sense so the minus you see always comes first so first of all you have all the minuses here ans so that's bascially alphabetically the first string that occurs and then afterwards you have 1 before 4 and then 4 before 6 so these first there are alphabatically ordered if they were strings and same ahead we first 1 then 2 then 3 then 4 and then 7.

//let's fix: to fix it we need a callback function with two parameters:
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

//Ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

//Descending order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);
//it will call this callback function until everything is in order

//let's refactor
//Ascending
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
movements.sort((a, b) => b - a);
console.log(movements);

//if a-b or b-a equals 0: position unchanged
//if you have a mixed array string+numbers= sort method won't work

//Half Part: bankist app: implementing sorting on movements
