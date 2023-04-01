"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const book = lufthansa.book;

//Just like the call method bind also allows us to manually set this keyword for any function call now the difference is that bind does not immediately call the function instead it returns the new function where the this keyword is bound so it's set to whatever value we pass into bind

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
//here we created a new function and set it's this keyword to eurwoings

bookEW(23, "Steven Williams");
console.log(eurowings);
//and now when we call this function we don't have to specify this keyword only just needed to pass the arguments
//and we could ofcourse now go ahead and do the same for all the airlines, so creating one booking function for each of the airlines and this then makes a little bit easier to book a flight for each of the airlines if we have to do it multiple times

//Taking more further:
//so in the call method we can pass multiple arguments beside the this keyword and so in the bind method we can actually do the same and then all of these arguments will also be basically set in stone, so they will be defined and the function will then always be called with these same arguments for ex: we could use bind to create a function for one specific airline and a specific flight number:
const bookEW23 = book.bind(eurowings, 23);
//and if we look at our bind function now, remember that it needs the flight number and the name but now in our bookEW23 is as if this first argument was already set and so all remaining function now only need the name
bookEW23("Dhruv Arora");
