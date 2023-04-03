"use strict";

//unlike forEach, the map method will give us a brand new array and this new array will contain in each position the results of applying a callback function to the original array elements:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//example: movements are in euros and now we want to cover them in USD
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

//simplifying callback fucntion:
const movementsUSD1 = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD1);

//with forOf:
const arr = [];
for (const mov of movements) {
  arr.push(mov * eurToUsd);
}
console.log(arr);

//so here in above map method we use a function to solve the problem of creating a new array while here in forOf we simply loop over one array and then manually create a new one so these two are completely different philosphies or we can also say paradigms, map method using a functional programming which is more preffered because in modern javascript there is definitely a push going on in the direction of fucntional programming and therefore in modern javascript map method is way to go then forOf for this type of computation.

//another example:
const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);

//Note:- It's completely acceptable to have two return statements or even more in the same fucntion as long as only one of them is executed.
