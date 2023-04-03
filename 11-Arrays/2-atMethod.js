"use strict";

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const arr = [23, 11, 64];

//traditional
console.log(arr[0]); //23

//at method
console.log(arr.at(0)); //23

//There is one particularity of the 'at' method which makes it quite useful to use instead of the brackets notation:
//let's say that we wanted to get the last element of the array and suppose that we do not know the length of the array:

//traditional
console.log(arr[arr.length - 1]); //64

//traditional slice
console.log(arr.slice(-1)[0]); //64

//at method
console.log(arr.at(-1)); //64
console.log(arr.at(-2)); //11
