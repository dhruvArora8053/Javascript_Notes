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

//More examples:
//max value of movements
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  //in reduce method we always have to somehow return the accumulator to the next iteration
  else return mov;
  //here we want to return the current movement as an accumulator for the next iteration
}, movements[0]);
console.log(max);

//using arrow:
const max1 = movements.reduce(
  (acc, mov) => (acc < mov ? mov : acc),
  movements[0]
);
console.log(max1);

//My Examples:-
const sumPositive = movements.reduce(
  (acc, mov) => (mov > 0 ? acc + mov : acc),
  0
);
console.log(sumPositive);

const maximum = movements.reduce(
  (acc, mov) => (acc < mov ? mov : acc),
  movements[0]
);
console.log(maximum);


// My Example:-
const max2 = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[1]
);
console.log(max2);