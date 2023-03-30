"use strict";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); //output: Hey undefined
//the reason for this output is as we previously mentioned which is the fact that an arrow function does not get it's own this keyword, it will simply use the this keyword from it's surroundings so in other words it's parent this keyword and the parent scope of this greet method is the global scope so it means it has window object
//Note:- jonas object is not actually a code block so you might think that like the curly braces denoting the code block here and ought to create it's own scope but it doesn't. So this is not a code block, it is an object literal so it's just a way that we literally define objects so all of the jonas object is still in global scope

console.log(this.firstName); //output: undefined
//when there is certain property doesn't exist on an object we do not get an error instead we get undefined and this behavior can become pretty dangerous incase we use var to declare variables:

var firstName = "Matilda";
//remember variables declared with var actually create properties on the global object

const jonas1 = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(this.firstName);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas1.greet(); //output: Hey Matilda
//now we are getting 'Hey Matilda' as an output, why is that?
//so again it is because inside of greet function the this keyword is window even though this arrow function was called by the jonas1 object but that rule does not apply here because it's an arrow fucntion

//Note:= big takeaway from the above example is that as a best practice you should never ever use an arrow function as a method

//Another pitfall of this keyword:-
