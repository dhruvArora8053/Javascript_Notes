"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

console.log(movements.includes(-130)); //true
//here includes returns true if any value in the array is exactly equal to -130

//what if wanted to test for a condition instead?

//some mehtod: what it does if there is any value for which the condition is true then the some method will return true otherwise false:
console.log(movements.some((mov) => mov === -130)); //true

//let's say that we would like to know if there has been any deposits on the account:
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits); //true

//deposit above than 5000:
const anyDeposits1 = movements.some((mov) => mov > 5000);
console.log(anyDeposits1); //false

//Half part: bankist app: request a loan functionality
