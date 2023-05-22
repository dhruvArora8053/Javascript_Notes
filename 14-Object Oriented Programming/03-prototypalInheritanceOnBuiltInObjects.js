"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName; //instance properties
  this.birthYear = birthYear; //instance properties
};

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 2001);

Person.prototype.calcAge = function () {
  console.log(2036 - this.birthYear);
};

Person.prototype.species = "Homo Sapiens";

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//Start From Here:-
console.log(jonas.__proto__);

//now let's acutally move up in the prototype chain and essentially take a look at the prototype of jonas's prototype:
console.log(jonas.__proto__.__proto__);
//it is indeed the prototype property of the object that's why you can see that constructor is the object here and then right away we see hasOwnProperty that we actally already studied so that's the reason why we can call hasOwnProperty on jonas:
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
//so one more time the prototype property of the constructor is gonna be the prototype of all the objects created by that constructor and so therefore whenever we create an array like above, it is ideed created by the array constructor:
console.log(new Array());

console.log(arr.__proto__.__proto__);
//so now we are back to haveing Object.prototype

//So one more time you can see that the prototypal inheritance is really a mechanism for reusing code so all of these built-in methods here have to exist only once somewhere in the javascript engine and then all the array in our code get access to the functions through the prototype chain and prototypal inheritance

//Now let's use this knowledge to extend the functionality of arrays even further:
Array.prototype.unique = function () {
  return [...new Set(this)];
  //here this keyword is gonna be the array on which this method will be called
};

console.log(arr.unique());
//so just to recap, we added a new method to the prototype property of the array constructor and so therefore now all arrays will inherit the 'unique' method and then we can call that method on any array that we want

//However, what we just did here so extending the prototype of a built-in object is generally not a good idea, if you're working on a small project on your own then you may could do this but really don't get into the habit of doing this for multiple reasons such as:
//1. the next version of the javascript might add a method with the same name that we are adding but it might work in a different way and so your code will then use that new method which remember works differently and then that will probably break your code

//2. The second reason is because when you work on a team of developers then this is really gonna be a bad idea because if multiple developers implement the same method with a different name that's just going to create so many bugs that it's just not worth doing this

//With DOM and functions:
const h1 = document.querySelector("h1");
//as we already know that all the DOM elements are behind the scenes are objects
console.dir(h1);
console.dir((x) => x + 1);

DaftPunk.prototype.totalSongs = function (allSongs) {
  console.log(`${this.name}'s total daftpunk's favourite songs are: ${
    this.favouriteSongs
  }

And the left ones are: ${allSongs - this.favouriteSongs}  `);
};

const harmonica = new DaftPunk("Harmonica", 5);
console.log(harmonica);
harmonica.totalSongs(100);

console.log(DaftPunk.prototype);
console.log(harmonica.__proto__);
console.log(harmonica.__proto__ === DaftPunk.prototype);
console.log(DaftPunk.prototype.isPrototypeOf(harmonica));
console.log(DaftPunk.prototype.isPrototypeOf(DaftPunk));

DaftPunk.prototype.fan = `daft
punk`;
console.log(harmonica.fan);
console.log(harmonica.hasOwnProperty("name"));
console.log(harmonica.hasOwnProperty("fan"));