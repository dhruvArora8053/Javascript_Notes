"use strict";

//We can use setTimeout to execute some code at some point in the future.

//Example: Ordering a pizza:
const ingredients = ["spinach", "olive"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  2000,
  ...ingredients
);
//we do not call this function ourselves we simply pass in the funciton as an argument to setTimeout and it is then setTimeout function who will call the callback function in the future
//passing arguments inside of a callback function is not possible without a function name so after milliseconds we can provide those arguments to our callback function

console.log("Waiting...");
//after setTimeout function, the other statements will be immediately exectued, it won't wait for the setTimeout function to be completely executed and this mechanism is called Asynchrounous Javascript

//Cancelling the setTimeout function:
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
//if it did not include the spinach then it would still work

//Half Part: Bankist App: implement timer to simulate the approval of loan

//What if we wanted to run a function over and over again like every five seconds or every 10 minutes?
//setInterval function:
// setInterval(() => {
//   console.log(new Date());
// }, 2000);

//Implementing clock:
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let sec = date.getSeconds();
  console.log(`${hour}:${minute}:${sec}`);
}, 1000);
