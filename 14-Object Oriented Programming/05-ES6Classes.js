"use strict";

//Now as we mentioned earlier classes in javascript do not work like traditional classes in other languages like Java or C++ so instead classes in javascript are just synthetic sugar over what we learned in these last sections. So they still implement prototypal inheritance behind the scenes but with a syntax that makes more sense to people coming from othe programming languages and so that was basically the goal of adding classes to javascript:

//class expression
// const PersonCl = class{

// }
//we also can use this notation because also classes are just a special type of functions

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    //this constructor actually works in a pretty simlilar way as a constructor function but this one is method of this class and infacit it needs to be called constructor
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //methods will be added to .prototype of PersonCl
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //now what's important to understand here is that all of these methods that we write in the class so outside of the constructor will be on the prototype of the objects and not on the objects themselves so this is really just like before prototypal inheritance
}

const jessica = new PersonCl("Jessica", 1996);
//everything works here similary as previous
console.log(jessica);
//now as we inspect this jessica object when we look into it's prototype then once again we will see the calcAge function here
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); //true

//Adding method this way also going to work fine:
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

//Note:- Important facts about classes:

//1. Classes are not hoisted and so even if they are class declarations so functional declaration remember are hoisted whic means we can use them before they are declared in the code but with classes that doesn't work

//2. Just like functions, classes are also first-class citizens and so what that means is that we can pass them into functions and also return them from functions and as we mentioned before that is because classes are really just a special kind of function behind the scenes

//3. Body of a class is always exectuted in strict mode

//Now you might ask if you should use constructor functions like we have been doing or instead it's better to just use classes?
// Well, constructor functions are not like old or deprecated syntax so it's 100% fine to keep using them so one more time this is more a question of person preference 
//Now if you're asking if you should classes without understanding prototypal inheritance well then the reply is definitely no 
//Now some people actually say that classes are really bad in general and that no one should ever be using them simply becase they hide the true nature of javascript but I don't actually agree with that and I think it's absolutely okay to use classes in your code as long as you understand everything that I just showed you previously 
