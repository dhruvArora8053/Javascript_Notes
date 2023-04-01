"use strict";

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  //you should not change the value of parameter but this is here just to make a point
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    // alert("Checked In");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, jonas);
console.log(flight); //nothing changed
console.log(jonas); //changed with extra Mr.

//so this flight here is a primitive type and as we passed that value into the function down here, then the flight number here is basically a copy of that original value so flight number contains a copy and not simply orighinal value of the flight variable. So this would be exactly the same as writing "const flightNum= flight" and this would also then simply copy this value to fligthNum and so flightNum here is completely different variable and therefore as we changed it here it did not get reflected in the outside flight variable and so it's still LH234.
 
//But now what about the Jonas object that we passed into the checkIn function and in that function it is called passenger and then we changed that passenger object and the jonas object was also affected by that change so why did that happen? So when we pass a reference type to a fucntion, what is copied is really just a reference to the object in the memory heap so that would be exacly like doing thing "const passenger= joans" so when we try to copy object like this we are only copying the reference to that object in the memory heap but they both point to the same object in the memory. So here as we are manipulating the passenger object, it is exactly the same as manipulating the jonas object because they both are the same object in the memory heap.

//Another example to show this pitfall:
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000 + 1);
};

newPassport(jonas);
checkIn(flight, jonas);
//so here the exact same thing is happening in the newPassport function we're passing in an object and so that object here is called person and as that function manipulates that person object ofcourse it also gets reflected in jonas object and as then we pass that jonas object into the checkin fucntion then ofcourse that passport in no longer the same as original one.

//Note: Their are languages like C++ where you can pass a reference to any value instead of the value itself and this works even with primitives so you could pass a reference to the value of five and then the original value outside of the fucntion would be changed and this is called pass by reference but Javascript does not have pass by reference it's a little bit confusing because as we just learned for objects we do in fact pass in reference so that is memory address of the object, however that reference itself is still a value, it's simply a value that contains a memroy address. So basically we pass a reference to the function but we do not pass by reference and this is an important distincition.
