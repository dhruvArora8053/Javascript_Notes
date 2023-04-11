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

//every method: if each and every element satisfies the condition the it will return true otherwise false
console.log(movements.every((mov) => mov > 0)); //false

const movements1 = [430, 1000, 700, 50, 90];
console.log(movements1.every((mov) => mov > 0)); //true

//So up until this point we have always written the callback function directly as an argument into our array methods however, we could also write the function seprately and then pass the fucntion as a callback:
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit)); //true

//and now we could reuse the same deposit function for all kinds of different methods that require callbacks with a true/false condition:
console.log(movements.every(deposit)); //false
console.log(movements.filter(deposit));

