"use strict";

//The first thing that we should know about closures is that a closure is not a feature that we explicitly use so we don't create closures manually like we create a new array or a new function, so a closure simply happens automatically in certain situations we just need to recognize those situations:

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
//before we start running the secure booking function down here, our code is running in the global execution context and in there we currently only have this secureBooking function and so we can also say that the global scope now contains secure booking then when secureBooking is actually executed a new execution context is put on the top of the execution stack now remember each execution context has a variable environment which contains all it's local variables and in this case it only contains the passengerCount set to 0, this variable environment is also the scope of this function. passengerCount is in the local scope but ofcourse this scope also gets access to all variables of the parent's scopes and in this case just a global scope anyway in the nex line of the secure booking function a new function is returned and it will be stored in the booker variable so the global context now also contains the booker variable and now what else happens when the secure booking function returns?
//it's execution context pops off the stack and disappears so the secure booking function has done it's job and has now finished execution, it really is gone now and that's important to be aware of and now let's call booker function:
booker();
booker();
booker();
//what this means that the booker function was infact able to increment the passengerCount to 1 then to 2 and then to 3 but now if we think about this then how is this even possible? How can the booker function update that passengerCount variable that's defined in a secure booking function that actually has already finished executing so it's execution context is no longer on the stack but still this inner function here which is the booker function is still able to access the passengerCount variable that's inside of the booker function that should no longer exist?
//Well the answer to this is because of closure, any function always has access to the variable environment of the execution context in which the function was created. Now in the case of booker, this function was created  in the execution context of secure booking which was popped off the stack previously so therefore the booker function will get access to this variable environment which contains the passengerCount variable and this is how the function wil be able to read and manipulate the passengerCount variable and so it's this connection that we call closure.
//So the function attempts to increase the passengerCount variable  however, this variable is not in the current scope and so javascript will immmediately look into the closure and see if it can find the variable there and it does this even before looking at the scope chain for ex: if there was a global passengerCount variable set to 10, it would still first use the one in the closure so the closure basically has priority over the scope chain

//Note:- there is no way for us to explicitly access closed over variables that's because closures are not like a tangible thing, they're not like an object or so that we can access so we just cannot reach into a closure and take variables from it, it's impossible because a closure is just an internal property of a function. We can observe that a closure happens but cannot access it's variables:

console.dir(booker);
//remember anything inside '[[]]' this is not accessible
