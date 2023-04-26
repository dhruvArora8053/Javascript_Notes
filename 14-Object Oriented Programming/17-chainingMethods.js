"use strict";

class Account {
  locale = navigator.language;

  #movements = [21, 44, 56];

  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

console.log(acc1.getMovements());
Account.helper();

//////////////////////////////////////////////////
//Start From Here - Chaining Methods:-
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); //-chainingMethods.js:24 Uncaught TypeError: Cannot read properties of undefined
//first deposit method for 300 will work but after that if we try to chain we are gonna get the error because deposit is not returning anything
//so what we gonna need to do is to return the object after at the end of these methods: this will make the methods chainable and this makes most sense in methods that actually set some property so all of the three that we chained actually do that
console.log(acc1.getMovements());
