"use strict";

console.log(Array.from(document.querySelectorAll("h1")));
//here the main thing to look is that this from method here is really a method that is attached to the Array constructor so we could not use the from method on an array

// console.log([1,2,3].from()); //error
//so this is not gonna work and that is because this from method is really attached to the entire Array costructor and not to the prototype property of the constructor and so therefore all the arrays do not inherit this from() method because again it's not on their prototype

//So Array.from() is basically just a simple function but it's a function that is attached to the Array constructor and the reason for that is simply so that developers know that it is realted to arrays. We also say that the from method in in the Array namespace and we actually used this term before for some methods in the number and in the internationalization name space:

console.log(Number.parseFloat(12));
//so this method is another static method and it's static on the number constructor so it's not available on numbers but only on this very constructor

//Let's add a static method in a constructor function:
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

//here
Person.hey = function () {
  console.log("Hey there 👍");

  console.log(this);
  //it is pointing to the constructor function and the reason for that is because that is actually the object that is calling the method
};

Person.hey();
//ofcourse this one is not inherited by the objects

// jonas.hey() //error
//it is not simply in the prototype of the jonas object so there's no way that the jonas object could inherit it

//In classes:
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Instance method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //Static method
  //here, all we need to do just add a static keyword:
  static hey() {
    console.log("Hey there 👍");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);

PersonCl.hey();
