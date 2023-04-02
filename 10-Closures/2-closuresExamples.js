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
