"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//We use the reduce method to essentially boil down all the elements in an array to one single value:
console.log(movements);

//Sum of all movements:
const globalBalance = movements.reduce((acc, mov, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + mov;
}, 0);

console.log(globalBalance);
//above accumulator is essentially like a snowball that keeps accumulating the value that we ultimately want to return
//it works because in each call of the callback fucntion the accumulator wil be the current sum of all the previous values ans so will really keep adding to this accumulator in each iteration of the loop
//and 0 is the second parameter of reduce mehtod representing initial value of the accumulator

//Half part: go to bankist app use reduce method to display the sum of all movements
