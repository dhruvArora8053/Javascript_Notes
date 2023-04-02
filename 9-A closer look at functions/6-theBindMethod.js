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
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");
//basically specifying parts of the arguments beforehand is actually a common pattern called partial application so essentially partial application means that a part of the arguments of the original function are already applied so which means already set and so that's exactly what the bookEW23 function is, it's essentially the book function but with 23 already predefined

//Bind method with Event Listeners:
lufthansa.planes = 300;
//eventually what we want to do is whenever we click the button 'Buy new plane' a new plane gets added
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
//now we are getting output of this.plane: NaN and the reason for that is that this keyword is the button element it is because as we learned that in an event handler function this keyword always points to the element on which the handler is attached to, so here lufthansa.buyPlane is a handler function and it is attached to 'buy' element and therefore inside of the handler function this keyword will point to the button element
