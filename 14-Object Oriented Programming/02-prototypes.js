"use strict";

const Person = function (firstName, birthYear) {
  //   console.log(this);
  //indeed here we got the empty object and the browser console is actually already telling us that it's basically here of the type 'Person'

  //And now let's use this knowledge to our advantage becuse we already that in the end of this function the this keyword will basically be returned and so whatever we add to that empty object will then be returned from the function and that returned object is gonna be the object that we are trying to build here:
  this.firstName = firstName; //instance properties
  this.birthYear = birthYear; //instance properties
  //here we gave same name to the properties as of parameters ofcourse we can set other names but it's just a convention

  //Never do this
  //   this.calcAge = function () {
  //     // console.log(2037 - this.birthYear);
  //   };
  //we should never create a method inside of a constructor function, it is because:
  //image we were gonna create a hundered or thousands or even tens of thousands of person objects using this constructor function then what would happen is that each of these objects would carry around this function here so if we had a thousand objects we would essentially create a thousand copies of this function and so that would be terrible of the performance of our code but instead to solve this problem we are gonna use prototypes and prototype inheritance
};

const jonas = new Person("Jonas", 1991);

// console.log(jonas);

//Now we can use this constructor function to create as many different objects as we want:
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 2001);

// console.log(matilda, jack);

//And this is a bit like the analogy from before where the above constructor function is now the bluepring for a house and then each of these objects that we create through that function will be the actual house in the real world

//Now remeber from one of the previous lectures that in classical OOP, an object created from a class is called an instance, now we didn't technically create a class here because as we discussed before javascript doesn't really have classes in the sense of traditional OOP however, we did created 3 objects from a constructor function. And constructor functions have been used since the beginning of javascript to kind of simulate classes and so therefore we can still say that jonas here is an instance of a Person and the same goes for Matilda and Jack and infact there is even an operator that we can use to test for that:
// console.log(jonas instanceof Person); //true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start from here:

//We talked about prototypes, prototypal ineritance and delegation but how does all of that work?
//Well it can be summarized like this, so first each and every function in javascript automatically has a property called prototype and that includes ofcourse constructor functions, now every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property so just to visualize in our case this would be Person dot prototype:
// Person.prototype

//so again all the objects that are created throught Person constructor function will inherit so they will get access to all the methods and properties that are defined on above prototype property, now let's add a method on Person.prototype and it is also an object:
Person.prototype.calcAge = function () {
  console.log(2036 - this.birthYear);
};

console.log(Person.prototype);

//now we would be able to do this:
jonas.calcAge();
//so here we did able to use calcAge method on the jonas object even though it is not really on the object itself so if check jonas here:
console.log(jonas);
//you see that it contains ofcourse the birthYear and the firstName butt it does not contain calcAge method but still we have access to it because of prototypal inheritance now let's check for matilda and jack:
matilda.calcAge();
jack.calcAge();

//And now it also solves the previous problem of getting copied each method to every object, because now there exists only one copy of calcAge function and now all of the objects that are created using the 'Person' constructor function can basically reuse this function on themselves and so the this keyword ofcorse in each of them is as always set to the object that is calling the method

//But how this all works?
//Well, it works because any object always has access to the methods and properties from it's prototype and the prototype of jonas and matilda is Person.prototype and we can actually confirm that becase each object has a special property:
console.log(jonas.__proto__);
//so the prototype of the jonas object is essentially the prototype property of the constructor function:
console.log(jonas.__proto__ === Person.prototype); //true

//what we checked above isn't it confusing? So shouldn't Person.prototype be the prototype of Person?
//Well actually no, so Person.prototype here is actually not the prototype of Person but instead it is what's gonna be used as the prototype of all the objects that are created with the Person constructor function so this is a subtle but importand difference and ifact what we just exaplained is confirmed by the above comparison that we did. So we just saw that jonas's prototype is the prototype property of the Person constructor function and there are actually other built-in methods that we can use to prove this:
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(jack)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//Now anyway, where does this __proto__ property here on the jonas object actually come from?
//Well, remember the new operator, it links the new empty object to the prototype and basically the step number three which will create the __proto__ property, so it creates the __proto__ property and sets it's value to the prototype property of the function that is being called so again it sets the proto property on the object to the prototype property of the constructor function and so this is how javascript knows internally that the jonas object is connected to Person.prototype and infact we check the jonas object in a console we can see the __proto__ property in here
console.log(jonas);

//We can also set properties on the prototype:
Person.prototype.species = "Homo Sapiens";
console.log(jonas);
console.log(matilda);
//this property is now also in the [[Prototype]]

console.log(jonas.species, matilda.species);

//remeber .species is not jonas's or matilda's own property: so own properties are only the ones that are declared directly on the object itself so not including the inherited properties:
console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false
