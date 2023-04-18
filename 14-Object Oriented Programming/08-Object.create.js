"use strict";

//Object.create function is the third way to implement prototypal inheritance or delegation

//Now with Object.create there is still the idea of prototypal inheritance however, their are no prototype properties involved and also no constructor functions and no new operator so instead we can use Object.create to essentially manually set the prototype of an object to any other object that we want

//Let's create an object that we want to be the prototype of all the person objects:
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  //this looks like a constructor function that we created earlier however, this has actually nothing to do with any constructor function because we are not using the new operator to call this. And it's also completely different from the constructor method that we have in ES6 classes, this is just a manual way of basically initializing the object
};

const steven = Object.create(PersonProto);
//this will now return a brand new object that is linked to the prototype that we pass in here and i.e. PersonProto
console.log(steven);
//so steven here is right now an empty object and it will be linked to this PersonProto object which will be it's prototype and as we are seeing in a console right now steven object is empty but we already have the prototype and in there we we we have calcAge

//let's add some properties
steven.name = "Steven";
steven.birthYear = 2002;

steven.calcAge(); //35
//and it worked and you see that we just like before implemented prototypal inheritance but in a completely different way

console.log(steven.__proto__);
//it is exactly the PersonProto object that we specified above to be the prototype of Person object by using Object.create() method

console.log(steven.__proto__ === PersonProto); //true

//Note:- everything else works same like prototypal inheritance or prototpe chaining

//Let's create another object:
const sarah = Object.create(PersonProto);

//let's add properties to sarah object in a better way than above:
sarah.init("Sarah", 1979);
sarah.calcAge(); //58
