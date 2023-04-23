"use strict";

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init("Steven", 2012);
console.log(steven);
steven.calcAge();

//So PersonProto above used to be the prototype of all the new person objects but now bascially we want to add another prototype in the middle fo the chain so between PersonProt and the object and so what we are gonna do is to make student inherit directly from person

const StudentProto = Object.create(PersonProto);
//and now we can use this StudentProto to create new students

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
//and so now the StudentProto object that we just created earlier is now the prototype of jay object and the PersonProto object is in turn the prototype of StudentProto

jay.init("Jay", 2010, "Computer Science");
console.log(jay);

jay.introduce();
jay.calcAge();

//So in this version we don't even worry about constructors anymore and also not about prototype properties and not about the new operator, so it's really just object linked to other objects and it's all really simple and beautiful.
