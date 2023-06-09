"use strict";

//Javascript new proposal of Class Fields:-

//Why is this proposal actually called Class Fields?
//Well, in traditional OOP languages like java and c++ properties are usually called fields so what this means is that with this new proposal javascript is moving away from the idea that classes are just a syntactic sugar over constructor functions because with this new class feature, classes actually start to have abilities that we didn't previously have with constructor functions

//In this proposal their are actually eight different kinds of fields and methods, let's explore 4 of them:
//1. public fields
//2. private fields
//3. public methods
//4. private methods

class Account {
  //1. Public Fields(instances):
  //We can think of a field as a property that will be on all instances so that's why we can also call this a public instance field so basically in our example here the two fields could be the movements and the locale because these are basically two properties that are gonna be on all the objects that we create with this class because we do not pass any of the values here into the constructor and so this movements array and this navigator.locale will always be set for all the instances and so now let's add them as public fields:
  locale = navigator.language;
  //   _movements = [];

  //now still the account here worked exactly the same so we have locale and movements on the acc1 object but now they are actually public fields but in our final object here that doesn't make any difference because again these public fields here are gonna be present on all the instances that we are creating through the class so they are not on the prototype so this is important to understand:
  //so all the below methods after constructor method, they will always be added to the prototype but again the fields here they are on the instances

  //2. Private Fields(instances):
  //So now with private fields we can now make it so that properties are really truly not accessible from the outside, let's now start making movements array private:
  #movements = [21, 44, 56];
  //and so this is a syntax that makes a field private in this new class proposal
  //so in the acc1 object we actually have #movements and so now we are finally gonna be able to see that this property is indeed protected

  //now the next candidate to make private is the pin, however this time the situation is a bit different because now we are actually setting the pin based on the input value to the constructor however, we cannot define a field in the constructor so the fields they really have to be out here which is outside of any method so what we have to do is to create the field out here with # but then don't set it to anything:

  #pin;
  //and so this is essentially just like creating an empty variable so in the beginning this will be set to undefined and then we can redefine this pin value inside of a constructor method:

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    // this._movements = [];
    // this.locale = navigator.language;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3. Public Methods:
  //so all these methods here that we have been using are indeed public methods:

  //Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // _approveLoan(val) {
  //   return true;
  // }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  //4. Private Methods:
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

//Private Fields:
// console.log(acc1.#movements); //caught SyntaxError: Private field '#movements' must be declared in an enclosing class
//so basically javascript thinks that we're trying to implement this private class field out here and that's the reason for this error but what matters infact that we cannot access this variable outside here

console.log(acc1.getMovements());
//this method we can still use to get the movements and that was ideed the whole point of creating this method

// console.log(acc1.#pin); //caught SyntaxError: Private field '#pin' must be declared in an enclosing class

// console.log(acc1.#approveLoan(100)); //caught SyntaxError: Private field '#approveLoan' must be declared in an enclosing class
//and so google chrome right now basically sees this as a private class field and not as a method so private methods are not available

//Other 4 are for static fields and methods:
//and we have already seen public static methods:
Account.helper();
