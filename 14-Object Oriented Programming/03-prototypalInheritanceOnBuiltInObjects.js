"use strict";

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

// console.log(Person.prototype);

//now we would be able to do this:
// jonas.calcAge();
//so here we did able to use calcAge method on the jonas object even though it is not really on the object itself so if check jonas here:
// console.log(jonas);
//you see that it contains ofcourse the birthYear and the firstName butt it does not contain calcAge method but still we have access to it because of prototypal inheritance now let's check for matilda and jack:
// matilda.calcAge();
// jack.calcAge();

//And now it also solves the previous problem of getting copied each method to every object, because now there exists only one copy of calcAge function and now all of the objects that are created using the 'Person' constructor function can basically reuse this function on themselves and so the this keyword ofcorse in each of them is as always set to the object that is calling the method

//But how this all works?
//Well, it works because any object always has access to the methods and properties from it's prototype and the prototype of jonas and matilda is Person.prototype and we can actually confirm that becase each object has a special property:
// console.log(jonas.__proto__);
//so the prototype of the jonas object is essentially the prototype property of the constructor function:
// console.log(jonas.__proto__ === Person.prototype); //true

//what we checked above isn't it confusing? So shouldn't Person.prototype be the prototype of Person?
//Well actually no, so Person.prototype here is actually not the prototype of Person but instead it is what's gonna be used as the prototype of all the objects that are created with the Person constructor function so this is a subtle but importand difference and ifact what we just exaplained is confirmed by the above comparison that we did. So we just saw that jonas's prototype is the prototype property of the Person constructor function and there are actually other built-in methods that we can use to prove this:
// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(matilda)); //true
// console.log(Person.prototype.isPrototypeOf(jack)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

//Now anyway, where does this __proto__ property here on the jonas object actually come from?
//Well, remember the new operator, it links the new empty object to the prototype and basically the step number three which will create the __proto__ property, so it creates the __proto__ property and sets it's value to the prototype property of the function that is being called so again it sets the proto property on the object to the prototype property of the constructor function and so this is how javascript knows internally that the jonas object is connected to Person.prototype and infact we check the jonas object in a console we can see the __proto__ property in here
// console.log(jonas);

//We can also set properties on the prototype:
Person.prototype.species = "Homo Sapiens";
// console.log(jonas);
// console.log(matilda);
//this property is now also in the [[Prototype]]

// console.log(jonas.species, matilda.species);

//remeber .species is not jonas's or matilda's own property: so own properties are only the ones that are declared directly on the object itself so not including the inherited properties:
// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species')); //false
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//Start From Here:-
console.log(jonas.__proto__);

//now let's acutally move up in the prototype chain and essentially take a look at the prototype of jonas's prototype:
console.log(jonas.__proto__.__proto__);
//it is ineed the prototype property of the object that's why you can see that constructor is the object here and then right away we see hasOwnProperty that we actally already studied so that's the reason why we can call hasOwnProperty on jonas:
console.log(jonas.hasOwnProperty("species"));

//let's take one step further:
console.log(jonas.__proto__.__proto__.__proto__); //null
//Object.prototype (top of prototype chain)

console.log(Person.prototype.constructor);
//it's now pointing to the constructor itself

//With Arrays:-
const arr = [3, 6, 6, 5, 6, 9, 9]; //new Array === []
console.log(arr.__proto__);
//so this is the prototype of an array and here you see we have all these methods that we already know and so this is the reason why all the arrays get access to all of these methods. So each array does ofcourse not contain all these methods but instead each array will inherit these methods from it's prototype:
console.log(arr.__proto__ === Array.prototype); //true
//so one more time the prototype property of the constructor is gonna be the prototype of all the objects created by that constructor and so therefore whenever we create an array like above, it is ideed created by the array constructor

console.log(arr.__proto__.__proto__);
//so now we are back to haveing Object.prototype

//So one more time you can see that the prototypal inheritance is really a mechanism for reusing code so all of these built-in methods here have to exist only once somewher in the javascript engine and then all the array in our code get access to the functions through the prototype chain and prototypal inheritance

//Now let's use this knowledge to extend the functionality of arrays even further:
Array.prototype.unique = function () {
  return [...new Set(this)];
  //here this keyword is gonna be the array on which this method will be called
};

console.log(arr.unique());
//so just to recap, we added a new method to the prototype property of the array constructor and so therefore now all arrayw will inherit the 'unique' method and then we can call that method on any array that we want

//However, what we just did here so extending the prototype of a built-in object is generally not a good idea, if you're working on a small project on your own then you may could do this but really don't get into the habit of doing this for multiple reasons such as:
//1. the next version of the javascript might add a method with the same name that we are adding but it might work in a different way and so your code will then use that new method which remember works differently and then that will probably break your code

//2. The second reason is because when you work on a team of developers then this is really gonna be a bad idea because if multiple developers implement the same method with a different name that's just going to create so many bugs that it's just not worth doing this

//With DOM and functions:
const h1 = document.querySelector("h1");
//as we already know that all the DOM elements are behind the scenes objects
console.dir(h1);
console.dir((x) => x + 1 );
