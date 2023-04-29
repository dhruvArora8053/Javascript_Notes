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
//we simply type latest as a property so we don't call the method but instead we write it as if it was just a property. So this can be very useful when we want to read something as a property but still need to do some calculations before

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
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  //adding getter
  get fullName() {
    return this._fullName;
  }
}
//so in this case what's really important to understand is that we are creating a setter for a property name that does already exists so fullName is already a property that we are trying to set here but then we also have the setter and so now what's gonna happen is that each time the constructor code is executed so whenever we set the fullName on the this keyword then actually the set method here is gonna be executed and so that name that we pass in as fullName will then become setter's parameter 'name'

//Now this is a very cryptic error message here but what happens here is that there is a conflict so right now both the setter function and the constructor function are trying to set the exact same property name and so that gives origin to this weird error so what we need to do instead is to create a new property name in setter and the convention for doing that is to add an underscore to the fullName so again t this is just a convention it's not a javascript feature so it's really just a different variable name to avoid the namein conflict

//However, when we use underscore we are actually creating a new fullName variable
const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
//now if we try to look at Jessica Davis, you see that right now the property that exists is _fullName and so we cannot do:
// console.log(jessica.fullName); //undefined
//this property doesn't exist so to fix this we now also need to create a getter for the fullName property and that will simply return _fullName:
console.log(jessica.fullName);
//and ofcoure the actual property that is in the jessica is still _fullName

//So this patter is here important to understand whenever we try to set a property that already exists, let's try another name:
const walter = new PersonCl("Walter", 1965);
//now we got the alert, walter is not a full name
console.log(walter);
//now it has only birthYear property

//with method
jessica.calcAge();

//with getter
console.log(jessica.age);
//so you see that getter is indeed just like any other regular method that we set on the prototype, you can also this on the jessica.__proto__
console.log(jessica.__proto__);

//Setters and Getters can actually be very useful for data validation for ex: let's try validation with the name:
//now we will create a setter for the fullName property which will check if this is actually a full name:
