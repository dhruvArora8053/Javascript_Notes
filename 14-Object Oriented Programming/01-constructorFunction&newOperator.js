"use strict";

//Creating constructor function for a person:-

//convention: constructor function start with caps

//array function will not work as a constructor function and that's because it doesn't have it's own this keyword and we need that

const Person0 = function (firstName, birthYear) {};

//the only difference between the constructor function and a regular function is that we call the constructor using the new keyword:
new Person0("Jonas", 1991);
//this new operator here is actually a very special operator because what it does is to call this function above but it does a whole lot more than just that

//So let's see what exactly happens when we call a function with the new operator like this:
//1. New empty object {} is created

//2. function is called: and in this function call the this keyword will be set to this newly created object,

//3. this newly created object is linked to a prototype,

//4. the object that was created in the beginning is then automatically returned from the constructor function, but actually at this point the object no longer needs to be empty and this is actually the trick  of making the constructor function work

const Person = function (firstName, birthYear) {
  console.log(this);
  //indeed here we got the empty object and the browser console is actually already telling us that it's basically here of the type 'Person'

  //And now let's use this knowledge to our advantage becuse we already know that in the end of this function the this keyword will basically be returned and so whatever we add to that empty object will then be returned from the function and that returned object is gonna be the object that we are trying to build here:
  this.firstName = firstName; //instance properties
  this.birthYear = birthYear; //instance properties
  //here we gave same name to the properties as of parameters ofcourse we can set other names but it's just a convention

  //Never do this
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  //we should never create a method inside of a constructor function, it is because:
  //image we were gonna create a hundered or thousands or even tens of thousands of person objects using this constructor function then what would happen is that each of these objects would carry around this function here so if we had a thousand objects we would essentially create a thousand copies of this function and so that would be terrible of the performance of our code but instead to solve this problem we are gonna use prototypes and prototype inheritance
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

//Now we can use this constructor function to create as many different objects as we want:
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 2001);

console.log(matilda, jack);

//And this is a bit like the analogy from before where the above constructor function is now the bluepring for a house and then each of these objects that we create through that function will be the actual house in the real world

//Now remeber from one of the previous lectures that in classical OOP, an object created from a class is called an instance, now we didn't technically create a class here because as we discussed before javascript doesn't really have classes in the sense of traditional OOP however, we did created 3 objects from a constructor function. And constructor functions have been used since the beginning of javascript to kind of simulate classes and so therefore we can still say that jonas here is an instance of a Person and the same goes for Matilda and Jack and infact there is even an operator that we can use to test for that:
console.log(jonas instanceof Person); //true
