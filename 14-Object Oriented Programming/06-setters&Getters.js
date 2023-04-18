"use strict";

//Every object in javascript can have setter and getter properties and we call these special properties assessor properties while the more normal properties are called data properties so getters and setters are basically functions that get and set a value just as the name says but on the outside they still look like regular properties.

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  //adding getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //adding setter
  set latest(mov) {
    this.movements.push(mov);
  },
  //any setter method needs to have exactly one parameter
};

//getter
console.log(account.latest); //300
//we simply type lates as a property so we don't call the method but instead we write it as if it was just a property. So this can be very useful when we want to read something as a property but still need to do some calculations before

//setter
//How do we uset the setter now?
//so if it was a regular method then we would have to do this:
// account.latest(50);
//but now above using set, that is actually like a property and not a method and so we can simply set it just like we set any other property:
account.latest = 50;
console.log(account.movements);

//Setter and Getters With Classes:

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //adding getter
  get age() {
    return 2037 - this.birthYear;
  }

  //adding setter
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this.fullName = name;
    else alert(`${name} is not a full name`);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);

//with method
jessica.calcAge();

//with getter
console.log(jessica.age);
//so you see that getter is indeed just like any other regular method that we set on the prototype, you can also this on the jessica.__proto__
console.log(jessica.__proto__);

//Setters and Getters can actually be very useful for data validation for ex: let's try validation with the name:
//now we will create a setter for the fullName property which will check if this is actually a full name:
