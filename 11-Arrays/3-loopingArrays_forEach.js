"use strict";

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//with forOf:
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log("----------forEach----------------");
//with forEach:
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else console.log(`You withdrew ${Math.abs(movement)}`);
});
//forEach requires a callback function so technically it is a higher order function, so this forEach method will call this callback function we are not calling it ourselves as always. But when exactly will forEach actually call this callback function?
//well, what the forEach method does is to loop over the array and in each iteration it will execute the callback function and also as the forEach method call the callback function in each iteration it will pass in the current element of the array as an argument until it reaches the end of an array:
//0: function(200)
//1: function(450)
//2: function(400)
//3: function(3000)
//4: function(650)
//5: function(130)
//6: function(70)
//7: function(1300) end.

//To get the index value:

//with forOf
console.log("-------------forOf------------");
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
}

//with forEach:
console.log("----------forEach----------------");
movements.forEach(function (movement, index, arr) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  console.log(arr);
});
//when forEach calls the callback function in each iteration it passes in the current element of the array as well as the current index and the etire array that we are looping.
//Here order matters: first parameter always needs to be the current element, second: current index and third: entire array

//When should you use forEach or forOf?
//1. Well, one fundamental difference between the two of them is that you cannot break out of a forEach loop so the continue and break statements do not work in forEach loop at all. So if you really need to break out of a loop then you have to keep using the forOf loop but other than this it comes down to your personal preference.
