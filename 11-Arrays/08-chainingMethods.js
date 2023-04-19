"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//let's say we want all the movement deposits then convert them from euros to dollars and finally add them all up so that we known how much was deposited into the account in US dollars:
//PIPELINE:
const totalDepositUsd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUsd);
//we cannot chain a method after reduce because it returns a single value so we can only chain a method after another one if the first one returns an array

//Incase there is some error in the chaining:
const totalDepositUsd1 = movements
  .filter((mov) => mov < 0)
  .map((mov, index, arr) => {
    console.log(arr);
    return mov * 1.1;
  })
  //   .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUsd1);

//Half part: calculating all the statistics in footer of bankist website

//Note:- 1. we should not go overboard with chaining methods, use as minimum methods as you can while chaining.
//2. it is a bad practice in javascript to chain methods that mutate the underlying original array and an example of that is the splice or reverse method.


