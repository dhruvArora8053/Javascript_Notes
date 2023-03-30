"use strict";

//Primitives:-
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);
//it works this way because each primitive value will simply be saved into it's own piece of memory in the stack.

//Objects:-
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
//so we're copying the entire object here atleast that's what it looks like but behind the scenes we are actually just copying the reference which will then point to same object

marriedJessica.lastName = "Davis";
//so as now change the lastname to married jessica this will not give us the result that we expect
console.log("Before Marriage:", jessica);
console.log("After Marriage:", marriedJessica);
//so as you can see we get before the marriage and after the marriage both the last name of Davis so the last name Davis is now also in the origina jessica object and not just in the one that we just copied, so why this happened?
//it happened because when we attempted to copy the original jessica object it did infact not create a new object in the heap, it's simply just another variable in the stack which holds the reference to the original object so both of these variables simply point to exactly the same memory address in the heap and that's because in the stack they both hold the same memory address reference so ofcourse it makes sense that if we change a property on marriedJessica it will also change on jessica itself. 
//This is also the reason why we can change properties in the marriedJessica object which was declared using a const here and cosnt is supposed to be for constants