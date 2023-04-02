"use strict";

//Example 1:
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
//f function still able to compute 'a' operand because of closure
console.dir(f);

const h = function () {
  const b = 4;
  f = function () {
    console.log(b * 2);
  };
};

//Re-assigning f function throug h
h();
f();
//f function still able to compute 'b' operand because of closure
console.dir(f);
//this proves that the closure can change as the variable is reassigned

//Example 2:
const boardPassengers = function (passangers, wait) {
  const perGroup = passangers / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${passangers} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
//here boardPassengers function has already been executed but still setTimeout was able to use perGroup and n variable because of closure

//setTimeout() is a function which will execute the callback function after given milli seconds:
// setTimeout(() => {
//   console.log("Timer");
// }, 1000);
