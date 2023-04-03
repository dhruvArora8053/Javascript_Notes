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

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Wick");
console.log(lufthansa);

//let's after some year Lufthansa group created a new airline:
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],

  //ofcourse we also want to be able to take bookings for a Eurowing flight, now taking above 'book' method and simply copying it and pasting it here is a bad practice so ofcoure we are not gonna do that so instead we will just take the method and store it in an external function and then we can use that function for all of the different airlines.
};

const book = lufthansa.book;
// book(23,'Sarah Williams') //output: error, cannot read properties of undefined
//it is because this keword points to undefined in a regular function
//now how to actually fix this problem: so in other words how do we tell javascript that we want to create a booking on the new Eurowings airline or even how do we tell it that we want to book on lufthansa airline?
//Well basically we need to tell javascript explicitly what the this keyword here should be like so if we want to book a lufthansa flight, the this keyword should point to lufthansa but if we want to book a Eurowings flight then the this keyword should point to eurowings so how do we do that?
//Well there are three function methods to do that:
//1. call method
//2. apply method
//3. bind method

//Call method:
book.call(eurowings, 23, "Sarah Williams"); //remember function are objects and objects have methods
console.log(eurowings);
//we have now information of flight attendant in an array of eurwoing too so let's recap what happened here:
//so this time we did not call the book function ourselves instead we called the call method and it's then this call method which will call the book function with the this keyword set to eurowings so whatever we pass has the first argument of the call method and so this allows us to manually and explicitly set the this keyword of any function that we want to call then all the arguments after the first one are simply the arguments of the original function

//for lufthansa
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

//let's add another object:
//now ofcourse these property names they all need to have the exact same format as the above original object because the call method is trying to read the properties from the given object
const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Tony Stark");
console.log(swiss);

//Apply method:
// similar to call method, the only difference is that apply does not recieve a list of arguments after the this keyword but instead it's gonna take an array of the arguments and so it will then take the elements from that array and pass it into the function:
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
//apply method is not used anymore in modern javascript because now we actually have a better way of doing the exact same thing:

book.call(swiss, ...flightData);


