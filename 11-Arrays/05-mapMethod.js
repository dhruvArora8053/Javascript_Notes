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

//simplifying callback function:
const movementsUSD1 = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD1);

//with forOf:
const arr = [];
for (const mov of movements) {
  arr.push(mov * eurToUsd);
}
console.log(arr);

//so here in above map method we use a function to solve the problem of creating a new array while here in forOf we simply loop over one array and then manually create a new one so these two are completely different philosiphies or we can also say paradigms, map method using a functional programming which is more preffered because in modern javascript there is definitely a push going on in the direction of fucntional programming and therefore in modern javascript map method is way to go then forOf for this type of computation.

//another example:
const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

//Note:- It's completely acceptable to have two return statements or even more in the same fucntion as long as only one of them is executed.

//Difference between forEach and map method:
//using forEach we printed each line individually to the console as we were looping over the array so in each of the iterations we performed some action that was then visible in the console and we can call this a side effect so the forEach method creates sides effects but now here with this map method all we did was to return each of the strings from the callback and so basically they got added into a new array and then finally we logged that entire array to the console and not the elements one by one and so here in this map method we did not create a side effect in each of the iteration all we did was to build a brand new array.

