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
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
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
