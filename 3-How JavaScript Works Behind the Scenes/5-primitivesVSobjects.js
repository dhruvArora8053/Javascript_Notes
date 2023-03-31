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
//so as you can see we get before the marriage and after the marriage both the last name of Davis so the last name Davis is now also in the original jessica object and not just in the one that we just copied, so why this happened?
//it happened because when we attempted to copy the original jessica object it did infact not create a new object in the heap, it's simply just another variable in the stack which holds the reference to the original object so both of these variables simply point to exactly same memory address in the heap and that's because in the stack they both hold the same memory address reference so ofcourse it makes sense that if we change a property on marriedJessica it will also change on jessica itself.
//This is also the reason why we can change properties in the marriedJessica object which was declared using a const here and cosnt is supposed to be for constants so for things that we cannot change however what actually needs to be constant is the value in the stack and in the stack the value only holds the reference which we are not actually changing, the only thing that we are changing is the underlying object that is stored in the heap and that is okay to change that has nothing to do with const or let that's only about the value in the stack but we change something in the heap that has nothing to do with const or let

//now what we can't do is to assign a completely different object now to marriedJessica:

// marriedJessica = {}; //output: error(assignment to constant variable)

//because this new object will be stored at a different position in memory and therfore the reference to that position in memory will have to change here in the marriedJessica variable and therfore that does not work because that is in the stack and so since it is a constant we cannot change the value in the stack so we cannot change a value to new memory address and therefore this does not work.
//if it was a let here then we would be able to change it to a new object but since it's a constanst so it's not allowed.
//So as a conclusion, completely changing the object so assigning a new object to it is completely different than simply chaning a property as we did above.

//What if we actually really wanted to copy the object so that we could then change one of them without changning the other:
