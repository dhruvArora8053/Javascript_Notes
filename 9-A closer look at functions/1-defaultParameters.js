"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers //<--modern way //and they can set to any expression and even we can even assign the old parameters that are before them
) {
  //To set default values:
  //Traditional Way-
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
//here numPassengers and price are undefined

createBooking("LH123", 2, 800);
//this will overwrite the default values

createBooking("Lh123", 2);
createBooking("Lh123", 5);
//above price is getting calculated in the default parameter

//if we want to leave some argument empty:
createBooking("LH123", undefined, 1000);
//this works because setting the parameter to undefined is the same thing as not even setting it

