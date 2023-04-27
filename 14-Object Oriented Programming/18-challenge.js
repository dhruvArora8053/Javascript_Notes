"use strict";

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
// GOOD LUCK

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`New Speed: ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`New Speed: ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const car1 = new CarCl("BMW", 120);
const car2 = new CarCl("Mercedes", 95);
const car3 = new CarCl("Ford", 120);

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h with a charge of ${
        this.#charge
      }%`
    );

    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);

rivian.brake();
rivian.chargeBattery(90);
console.log(rivian);
rivian.accelerate();
rivian.chargeBattery(40).accelerate().accelerate();
