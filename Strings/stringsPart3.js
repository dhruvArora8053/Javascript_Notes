"use strict";

//Split Method:
console.log("a+very+nice+string".split("+"));
//here it will split up this string by the + sign and it will then store the results into elements of a new array.

console.log("Jonas Schmedtmann".split(" "));

//using destructuring:
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
console.log(firstName, lastName);

//Join method:
//opposite of split method:
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

//Example: how to capitalize a name:
const capitalizeName = function (name) {
    
};

capitalizeName("jessica ann smith davis");
capitalizeName('jonas schmedtmann')
