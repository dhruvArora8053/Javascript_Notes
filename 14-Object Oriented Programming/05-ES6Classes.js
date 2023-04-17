"use strict";

//Now as we mentioned earlier classes in javascript do not work like traditional classes in other languages like Java or C++ so instead classes in javascript are just synthetic sugar over what we learned in these last sections. So they still implement prototypal inheritance behind the scenes but with a syntax that makes more sense to people coming from othe programming languages and so that was basically the goal of adding classes to javascript:

//class expression
// const PersonCl = class{

// }
//we also can use this notation because also classes are just a special type of functions

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    //this constructor actually works in a pretty simlilar way as a constructor function but this one is method of this class and infacit it needs to be called constructor
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //adding methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //now what's important to understand here is that all of these methods that we write in the class so outside of the constructor will be on the prototype of the objects and not on the objects themselves so this is really just like before prototypal inheritance
}

const jessica = new PersonCl("Jessica", 1996);
//everything works here similary as previous
console.log(jessica);
//now as we inspect this jessica object when we look into it's prototype then once again we will see the calcAge function here
