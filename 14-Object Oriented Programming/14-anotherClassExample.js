"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    //but now what about the movements array and also maybe the locale, so we want to start always with an empty array as the movements and the locale we want to get from the navigator.language so how should we do that?

    this.movements = [];
    this.locale = navigator.language;
    //so as we did here for movements and the locale we can create properties on any instance and properties that are not based on inputs

    //infact, we can even execute any code here in this constructor that we want:
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public Interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
    //we still needed this keyword to access deposit method
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

//but now what about the deposits and withdrawals so basically what about our movements?
//deposit
// acc1.movement.push(250);

//withdrawal
// acc1.movement.push(-140);

// console.log(acc1);
//however pushing the movements like this is not a good idea at all so instead of interacting with property like this, it is much better to create methods that interact with these properties, so let's create a deposit and withdrawal method on above constructor

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
//now our movements array looks just same as before but now we are actually using the public interface that we built above with deposit and withdraw method, so basically these methods here are the interface to our objects and we also call this API
//also the withdraw method here actually abstracts the fact that a withdrawal is basically a negative movement, above without using methods we pushed -140 manually but now as we do a withdrawal it's ofcourse a lot more natural to write that simply 140 is going to be withdrawn, so what we are trying to say is that this minus here is something that the user of this object shouldn't be caring about and so now we actually abstracted that away using the withdraw method

//Now ofcourse still there is nothing stopping someone on our team from interacting with the movements array directly and potentially making mistakes and introducing bugs so simply the fact that we  have these deposit and withdraw methods doesn't make it impossible to still do this:
// acc1.movement.push(250);
// acc1.movement.push(-140);

//and same goes for the pin, so ofcourse we can access the pin from outside of the account:
console.log(acc1.pin);
//but probably it shouldn't be accessible from outside of the class and this is actually a very real and very important concern

//let's use loan methods:
//now in the public interface we only want requestLoan method here so we want be able to do:
acc1.requestLoan(1000);
console.log(acc1);
//and so we see that the loan was approved and it was pushed into our array

//but ofcourse we are also able to do:
acc1.approveLoan(100);
//and so ofcourse this doesn't do anything but in the real world we should not even be allowed to access this kind of method so this is kind of an internal method that only the requestLoan method should be able to use and the reason why we're telling you all this is basically just to justify that we really need data encapsulation and data privacy
