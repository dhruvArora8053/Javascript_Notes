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
//Why arrays do actually have methods?
//Well, methods are simply functions that we can call on objects so basically they are functions attached to objects so if we have array methods that means arrays themselves are also objects so these array methods are simply functions that are attached to all arrays that we create in javascript.

let arr = ["a", "b", "c", "d", "e"];

//Slice: does not mutate the original arrays
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice(1, -2));

//shallow copy
console.log(arr.slice());
console.log([...arr]);

//Splice: it mutates the original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
//most of the time the value that the splice method returns doesn't even interest us all we are usually interested in is to just delete one ore more elements from an array using splice

console.log(arr.splice(1, 2));
//this first parameter works the same as slice buth second parameter is number of elements that we want to delete
console.log(arr);

//Reverse: mutates the original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);

//Concat: does not mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join: does not mutate the original array
console.log(letters.join("-"));
