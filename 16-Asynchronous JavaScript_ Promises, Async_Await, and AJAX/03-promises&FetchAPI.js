'use strict';

//Modern way of making ajax calls using Fetch API:
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// request.send();

const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);
//now we actually have a promise and so this promise is right now stored in this request variable but now what exactly is a promise and what can we do with it?
//An object that is used as a placeholder for the future result of an asynchronous operation, we can also say that a promise is like a container for an ansynchronously delivered value or even less formal let's say that a promise is a container for a future value
//benefit of using promise:
//1. we no longer need to rely on events and callback functions to handle asynchronous resluts, events and callback functions can sometimes cause unpredictable results and so this is a bin win already
//2. but even better with promises we can chain promise for a sequence of asynchronous operations instead of nesting like we did in the last section and with this we can finally escape callback hell which was our initial goal all along
