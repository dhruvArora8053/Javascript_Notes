"use strict";

//Function returning function:
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");
//our first function greet returned a new function that we stored into the greetHey variable and it is now a function that we can call as we did here above using the parenthesis syntax and ofcourse we can also do it all in one go:

greet("Hello")("Jonas");
//here greet("Hello") returned a function and that function we immdediately called by passing the argument 'Jonas'.

//What's the point of having functions returning other functions?
//Well this will actually become extremely useful in some situations and especially if we're using a really important programming paradigm called functional programming we'll talk about that later on

//Writing above example with arrow function notation:
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow("Hello")("Jonas");

//My example:-
//1.
const pizzaSize = function (size) {
  return function (brand) {
    console.log(`This is a ${size} size pizza from ${brand}`);
  };
};

pizzaSize("normal")("Dominoes");

//2.
const intro = function (firstName) {
  return function (age) {
    console.log(`Hello my name is ${firstName} and I am ${age} years old.`);
  };
};

intro("John")(50);
