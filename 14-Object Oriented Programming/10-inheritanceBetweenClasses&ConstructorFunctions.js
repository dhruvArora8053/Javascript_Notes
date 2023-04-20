"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//constructor function for student:
//Now usually we want a child class to have the same functionality as the parent class but with some additional functionality and so usually we pass in the same arguments but then also some additional ones:
const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  //   this.course = course;

  //here, there is one thing that we can and should improve so right now above code is basically a simple copy of the Person function constructor that we want to be the parent class and as you know havind duplicate code is never a good idea because:
  //1. it violates DRY principle
  //2. imagine that the implementation of person here changes in the future then that change will not be reflected in the student so instead of having this duplicate code here let's simply call the person function:

  // Person(firstName, birthYear); //error

  //so the problem here is that we are now actually calling this Person constructor function as a regular function call so we are not using the 'new' operator to call this Person function constructor and so therefore this function call here is simply a regular function call and remember that in a regular function call the this keyword is set to undefined and so therefore that's why we get this error here that it cannot set firstName to undefined
  //so let's use the call method to call this function:
  Person.call(this, firstName, birthYear);
  //in this case we want the this keyword inside Person function to simply be the this keyword inside this function here. Because as you know the this keyword is gonna be in the beggining the empty object that is being created by the new operator for mike and so it is on that new object where we want to set the firstName and the birthYear property

  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);
//and with this the Student.prototype object in now an object that inherits from Person.prototype. Now we had to create this connection here before we add many more methods to the prototype object of Student and that's because Object.create() will return an empty object and so at this point Student.prototype is empty and so onto that empty object we can add methods like the below one but if we did it the other way around so if this was after introduce method then object.create would basically overwrite these methods that we had already added to the prototype object of a student

//Now you might be wondering why even we needed to use Object.create so why didn't we just do this:
// Student.prototype= Person.prototype;
//infact this doesn't work at all, because if we do Student.prototype= Person.prototype then we will not end up with a prototype chain that we need instead we would end up with the wrong chain, here we're actually saying that student's prototype property and a person's protype property should be the exact same object but infact that's just not what we want, what we do want is the person's prototype property object to be the prototype of student.prototype so we want to inherit from it but is should not be the exact same object and that's why we actually needed object.create

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();

mike.calcAge(); //17
//This worked because of prototype chain let's see how:
//so when we do mike.calcAge(), we are effectively doing a property or a method lookup so that is javascript trying to find the requested property or method. Now in this case as we know the calcAge() method is ofcourse not directly on the mike object it's also not in mike's prototype that's where we defined the introduce method but not calcAge. So just like before whenever we try to access a method that's not on the object's prototype then javascript will lookup even further in the prototype chain and see if it can find a method so in the parent prototype and that's exactly what happened here so javascript will finally find the calcAge in Person.prototype which is exactly where we defined it

//So just like before Object.prototype will sit on top of the prototype chain so ofcourse we could still call the methods like hasOwnProperty to mike too, it doesn't matter how far away in the prototype chain a method is and with this we now have the full picture of how inheritance between classes works with function constructors.

//Let's inspect
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.dir(Student.prototype.constructor);
//ideally this should point back to the Student but here it points back apparent to Person and so you see that javascript now thinks that the constructor of Student.prototype is Person and the reason for that is that we set the prototype property of the Student using Object.create and so this makes it so that the constructor of student.prototype is still Person so we need to fix this because sometimes it's important to rely on the constructor property, let's fix:
Student.prototype.constructor = Student;

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
//it's because we linked prototypes together if hadn't used Object.create then this should be false
console.log(mike instanceof Object); //true

//My Example:-
// const SmallFactory = function (name, bike, car, plane) {
//   this.name = name;
//   this.bike = bike;
//   this.car = car;
//   this.plane = plane;
// };

// SmallFactory.prototype.bought = function () {
//   console.log(
//     `${this.name} bought ${this.bike}, ${this.car} and a ${this.plane}`
//   );
// };

// const buyJonas = new SmallFactory("Jonas", "Kawasaki", "Ferrari", "Typhoon");
// console.log(buyJonas);
// buyJonas.bought();

// const buyDhruv = new SmallFactory(
//   "Dhruv",
//   "Hayabusa",
//   "Aston Martin",
//   "Apache"
// );
// console.log(buyDhruv);
// buyDhruv.bought();

// const BigFactory = function (name, bike, car, plane, train, boat) {
//   SmallFactory.call(this, name, bike, car, plane);
//   this.train = train;
//   this.boat = boat;
// };

// const johnBuy = new BigFactory(
//   "John",
//   "Duke",
//   "Paggani",
//   "Jumbo",
//   "American",
//   "Lamborghini"
// );

// BigFactory.prototype = Object.create(SmallFactory.prototype);

// BigFactory.prototype.buys= function(){
//   console.log('bought everything');
// }
