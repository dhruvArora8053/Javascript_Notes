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
  const names = name.split(" ");
  const arr = [];

  for (const n of names) {
    // arr.push(n[0].toUpperCase() + n.slice(1));
    arr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(arr.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

//Padding a string:
//padding a string means to add a number of characters to the string until the string has a certain desired length

const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log("Jonas".padStart(25, "+"));

console.log(message.padStart(25, "+").padEnd(35, "+"));

//Example: masking the credit card number:
const maskCrediCard = function (number) {
  //converting number to string
  const str = number + "";

  console.log(str.slice(-4).padStart(str.length, "*"));
};

maskCrediCard(79368420327894);
maskCrediCard("34752980796479796");

//Repeat Method:
//this one simply allows us to repeat the same string multiple times.
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

//due to the bad weather there are now many planes waiting in for takeoff:
const planesInLine = function (n) {
  console.log(`Their are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(10);

//All string methods that we learned:
//1. indexOf
//2. slice()
//3. toLowerCase()
//4. toUpperCase()
//5. trim()
//6. trimStart() and trimEnd()
//7. replace()
//8. replaceAll()
//9. includes()
//10. startsWith()
//11. endsWith()
//12. split()
//13. join()
//14. padStart()
//15. padEnd()
//16. repeat()

