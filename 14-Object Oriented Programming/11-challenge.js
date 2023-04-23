"use strict";

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK �

// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

const Car = function (make, curSpeed) {
  this.make = make;
  this.curSpeed = curSpeed;
};

Car.prototype.brake = function () {
  this.curSpeed -= 5;

  console.log(`New Speed: ${this.curSpeed} km/h`);
};

const EV = function (make, curSpeed, charge) {
  Car.call(this, make, curSpeed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
EV.prototype.accelerate = function () {
  this.curSpeed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.curSpeed}km/h with a charge ${this.charge}%`
  );
};

// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �

const electricCar = new EV("Tesla", 120, 23);
electricCar.accelerate();
electricCar.chargeBattery(90);
electricCar.accelerate();
electricCar.brake();

//My example:
EV.print = function () {
  console.log("just printing something random");
};


EV.print();