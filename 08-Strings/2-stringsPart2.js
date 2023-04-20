"use strict";

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("jonas".toUpperCase());

//Example:Fix capitalization in name:
const passenger = "jOnAs"; //Jonas
const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //output: Jonas

//Example1: Comparing Emails:
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);
//here toLowerCase will return string and on that string we immediately can call another method
console.log(email === normalisedEmail);

//another two methods 
//trimStart(trim from the start) and 
//trimEnd(trim from the end)

//Replacing:
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

//another replacing example:
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
//will change only first word 'door'

console.log(announcement.replaceAll("door", "gate"));
//will change all the words in a paragraph

//traditional way: regular expression:
console.log(announcement.replace(/door/g, "gate"));
//her /door/ is a regular expression and g flag stands for global

//Note:- All String methods are case sensitive

//String methods that return booleans:
//1. includes
//2. startsWith
//3. endsWith

//example:
const plane = "Airbus A320neo";

console.log(plane.includes("A320")); //output: true
console.log(plane.includes("Boeing")); //output: false
console.log(plane.startsWith("Air")); //output: true
console.log(plane.startsWith("Airb")); //output: true

//let's say we want to check if the current plane is part of the new airbus family:
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family ");
}

//Practice Excercise:
//here we want to check if the baggage of a certain passenger is basically allowed to be checked in:
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else console.log("Welcome Aboard");
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");

