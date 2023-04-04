"use strict";

const arr = [23, 11, 64];

//traditional
console.log(arr[0]); //23

//at method
console.log(arr.at(0)); //23

//There is one particularity of the 'at' method which makes it quite useful to use instead of the brackets notation:
//let's say that we wanted to get the last element of the array and suppose that we do not know the length of the array:

//traditional
console.log(arr[arr.length - 1]); //64

//traditional slice
console.log(arr.slice(-1)[0]); //64

//at method
console.log(arr.at(-1)); //64
console.log(arr.at(-2)); //11

//When we should use at method?
//well as always it depends: so if you want to get the last element of an array or basically start counting from the end of an array then you should probably start using the 'at' method and also if you want to do 'method chaining' then the at method is also perfect for that.

//at method on string:
console.log("jonas".at(0));
console.log("jonas".at(-1));
