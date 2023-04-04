"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//find method retrieves the first element of an array that satisfies the condition:
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

//difference between filter and find:
//1. filter returns array while find returns value
//2. filter returns all values while find returns first value

//Half part: lecture section of bankist website
