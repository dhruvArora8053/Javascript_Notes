"use strict";

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

console.log(+future);
//this is a timestamp in milliseconds and we can convert them back to a date or to hours or whatever really we need

//function that tells how many days have passed:
const daysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

const days2 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days2);

//Note:- if you need really precise calculations for example including time changes due to daylight saving changes other weird edge cases like that then you should use a date library like moment.js

//Half Part: Bankist App: days passed
