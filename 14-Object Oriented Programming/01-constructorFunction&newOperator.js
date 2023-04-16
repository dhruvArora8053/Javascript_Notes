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

  //And now let's use this knowledge to our advantage becuse we already that in the end of this function the this keyword will basically be returned and so whatever we add to that empty object will then be returned from the function and that returned object is gonna be the object that we are trying to build here:
  this.firstName = firstName;
  this.birthYear = birthYear;
  //here we gave same name to the properties as of parameters ofcourse we can set other names but it's just a convention
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
