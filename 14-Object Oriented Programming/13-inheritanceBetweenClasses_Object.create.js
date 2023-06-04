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

//So PersonProto above used to be the prototype of all the new person objects but now bascially we want to add another prototype in the middle of the chain so between PersonProto and the object and so what we are gonna do is to make student inherit directly from person

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

//Daft Punk's Example:-
const DaftpunkProto = {
  init(name, favouriteSongs) {
    this.name = name;
    this.favouriteSongs = favouriteSongs;
  },

  totalSongs(allSongs) {
    console.log(`${this.name}'s total daftpunk's favourite songs are: ${
      this.favouriteSongs
    }
  
  And the left ones are: ${allSongs - this.favouriteSongs}  `);
  },
};

const harmonica = Object.create(DaftpunkProto);
harmonica.init("Harmonica", 5);
console.log(harmonica);
harmonica.totalSongs(100);

const PlayedProto = Object.create(DaftpunkProto);

PlayedProto.init = function (name, favouriteSongs, mostPlayed, leastPlayed) {
  DaftpunkProto.init.call(this, name, favouriteSongs);
  this.mostPlayed = mostPlayed;
  this.leastPlayed = leastPlayed;
};

PlayedProto.decentPlayed = function (song) {
  console.log(`I played ${song} decently`);
};

const john = Object.create(PlayedProto);
john.init("John", 10, "Robot Rock", "Rollin and Scratchin");
console.log(john);
john.decentPlayed("Around the World");
john.totalSongs(150);

console.log(harmonica.__proto__);
console.log(john.__proto__);
console.log(john.__proto__.constructor);
// john.__proto__.constructor = Played;
console.log(john.__proto__.constructor);
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);