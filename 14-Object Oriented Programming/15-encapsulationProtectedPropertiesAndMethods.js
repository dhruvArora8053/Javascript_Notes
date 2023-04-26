"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._movements = [12, 16, 300];
    this._pin = pin;
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public Interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
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

//Now first remember that encapsulation basically means to keep some properties and methods private inside the class so that they are not accessible from outside of the class then the rest of the methods are basically exposed as a public interface which we can also call API

//Their are two big reasons why we need encapsulation and data privacy:
//1. to prevent code from outside of a class to accidentally manipulate our data inside the class and that's exacly what we did in the previous section:
//acc1.movements.push(250)
//acc1.movements.push(-140)
//so this is also the reason why we implement a public interface, so we are not supposed to manually mess with the movement property and therefore we should encapsulate it

//2. when we expose only a small interface so a small API consisting only of a few public methods then we can change all the other internal methods with more confidence because on that case we could be sure that external code does not rely on these private methods and so therefore our code will not break when we do internal changes

//Let's implement data privacy and encapsulation:
//however javascript classes actually do not yet support real data privacy and encapsulation now their is a proposal to add truly private class fields and methods to the language but it's not completely ready yet

//Fake encapsulation by using a convention:

//putting underscore before movements keyword:
// so again this does not acutally make the property truly private because this is just a convention so it's something that developer agree to use and then everyone does it this way but since it is not truly private we call this 'protected'

//now we can still do this
//acc1._movements.push(250)
//acc1._movements.push(-140)
//data ofcourse still accessible if we use this underscore outside here but atleast now everyone on your team and that includes yourself will know that this movement property is not supposed to be touched outside of the class so you can still do it but atleast you will know that it is wrong.

//Now if we still wanted to give access to the movements array from the outside then we would have to implement a public method for that:
//implemented getMovements() method on public interface, and now this would be the correct way to get the movements
console.log(acc1.getMovements());
//and so this movements everyone can still atleast access them but they cannot override them so they cannot set the movements uless ofcourse they use the underscore with the convention but then atleast they'll know that it's wrong to access the property

//let's protect pin property and approveLoan method with '_'
