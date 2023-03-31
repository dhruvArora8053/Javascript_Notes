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
//the reason for this output is as we previously mentioned which is the fact that an arrow function does not get it's own this keyword, it will simply use the this keyword from it's surroundings so in other words it's parent's, this keyword and the parent scope of this greet method is the global scope so it means it has window object
//Note:- jonas object is not actually a code block so you might think that like the curly braces denoting the code block here and ought to create it's own scope but it doesn't. So this is not a code block, it is an object literal so it's just a way that we literally define objects so all of the jonas object is still in global scope

console.log(this.firstName); //output: undefined
//when there is certain property doesn't exist on an object we do not get an error instead we get undefined and this behavior can become pretty dangerous incase we use var to declare variables for example:
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

//Another pitfall of this keyword:- is when we have a function inside of a method:
const jonas2 = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solutin 1: use variable
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2: use arrow function
    const isMillenial = () => {
      console.log(this);

      //   console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    //this works because this function uses the this keyword of it's parent scope

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(this.firstName);
    console.log(`Hey ${this.firstName}`);
  },
};

// jonas2.greet();
jonas2.calcAge(); //output: error, cannot read properties of undefined
//why we got this error?
//well if we really think then isMillenial() is just a regular function call even though it happens inside of a method and the rule says inside a regular function call which this clearly is that this keyword must be undefined and so this is just as if this function was outside of this method
//and solution to this problem is just simply declare a variable what we usually call 'self' outside of a function set to this keyword and then use that variable inside of your function or just use an arrow function

//arguments keyword:
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

addExpr(2, 5, 8, 5);
//up until this point we only passed same number of arguments as parameters but it is completely legal to add more arguments, they will not have a name so we didn't name them but they exist and we can see them here in the arguments array and so they do appear and we can use them therefore in the functions for ex: we could use loop and then loop over this array and add all the numbers together

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
//but arrow functions does not get 'arguments' keyword
