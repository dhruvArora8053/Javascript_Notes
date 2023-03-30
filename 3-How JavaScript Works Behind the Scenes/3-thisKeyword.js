"use strict";

console.log(this);
//this keyword in the global scope is simply a window object

//this keyword inside of a regular funciton:
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //output: undefined
  //inside a regular function call this keyword will be undefined and that's because we are in strict mode and in the sloppy mode it would be the global object, and regular function means without any owner like objects.
};
calcAge(1991);

//this keyword inside of a arrow function:
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //output: undefined
  //inside a arrow function call this keyword will be window object
  //so why is that in regular this is undefined but in arrow window object?
  //well it is because the arrow function does not gets its own this keyword so instead the arrow function simply uses the lexical this keyword which means that it uses the this keyword of it's parent fucntion or of it's parent scope and in this case here the parent of arrow function is a global scope so that's why this keyword here is a window object but if you talk about regular function it gets it's own this keyword which has the value of undefined.
};
calcAgeArrow(1980);

//this keyword inside of an object:
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    //here this is a jonas object
    console.log(2037 - this.year);
  },
};

jonas.calcAge();
//so when we have a method call, the this keyword inside of a method will be the object that is calling the method and in this case that's the jonas object so jonas here basically the owner of the method and therfore inside of a calcAge this keyword is a jonas object.

//Note:- The this keyword will point to the object that is calling the method, right? And that means that the this keyword will not simply point at the object in which we wrote the method so here above we wrote the calcAge method inside of the jonas object and so we might think that is the reason why the this keyword point to jonas but that is not true, the reason that the this keyword will point to jonas in this case is because jonas was the object calling that method and that's a subtle but very important difference:

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //because functions are just values and this phenomena is called method borrowing
console.log(matilda);

matilda.calcAge();
//here now the this keyword is pointing to matilda so this proves the fact that the this keyword always points to the object that is calling the method

//Taking the function out of the jonas object:
const f = jonas.calcAge;
console.log(f);
f();
//now the this keyword here is undefined and therefore we also got the error 'cannot read property of undefined' because this keyword in now undefined so this.year does not exist so this happens because this f function here in now just a regular function, it is not attached to any object there is no owner of this f function anymore here at this point and therefore it is just a regular function call
