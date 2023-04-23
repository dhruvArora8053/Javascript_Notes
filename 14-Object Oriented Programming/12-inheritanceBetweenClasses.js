"use strict";

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  //'extends' keyword here will link to prototypes behind the scenes without us even having to think about that

  constructor(fullName, birthYear, course) {
    //here we don't have call PersonCl.call(), instead we call the super function

    //Always needs to happen first: and that's because this call to the super function is responsible for creating the this keyword in the subclass and so therefore without doing this we wouldn't be able to access the this keyword to add more properties
    super(fullName, birthYear);
    //super is basically the constructor function of the parent class so the idea is still similar to what we did in the constructor function but here it all happens automatically

    //now
    this.course = course;
    //and declaring this statement is not mandatory
  }
}

//with constructor method
const martha = new StudentCl("Martha", 2012, "Computer Science");
console.log(martha);

//without constructor method
class StudentCl1 extends PersonCl {}
const martha1 = new StudentCl1("Martha", 2012, "Computer Science");
console.log(martha1);
//this was just to demonstrate that if you do not need any new properties then you don't even need to bother writing a constructor method in a child class
