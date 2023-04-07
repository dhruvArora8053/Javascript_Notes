"use strict";

//First thing that you should know about numbers is that in javascript all numbers are represented internally as floating point numbers so basically always as decimals no matter if we actuall write them as integers or as decimals:
console.log(23 === 23.0); //true
//that's the reason why we only have one data type for all numbers

//also numbers are represented internally in a 64 base 2 format so that means that numbers are always stored in a binary format which makes computation of some numbers a little difficult:
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); //false
//so we cannot do like really precise scientific or financial calculations in javascript

console.log(Number("23"));
console.log(+"23"); //type coercion

//Parsing Numbers:
//parseInt
console.log(Number.parseInt("30px", 10)); //30
console.log(Number.parseInt("e23", 10)); //NaN
//by putting base 10 it means it will try to extract base 10 numbers

console.log(Number.parseInt("30px", 2)); //NaN

//parseFloat:
console.log(Number.parseFloat("2.5rem")); //2.5
console.log(Number.parseInt("2.5rem")); //2
console.log(Number.parseFloat("   2.5rem  ")); //2.5, the spaces would not affect anything at all

console.log(parseFloat("   2.5rem  ")); //2.5, this would also work but this is a traditional way, now in modern javascript it is more encouraged to call these functions actually on the Number object, so we say that Number here provided something called a namespace

//Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN("20")); //false
console.log(Number.isNaN(+"20X")); //true
console.log(Number.isNaN(23 / 0)); //false

//better method than isNaN to check if value is a number:
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("20")); //false
console.log(Number.isFinite(+"20X")); //false
console.log(Number.isFinite(23 / 0)); //false
//this is the ultimate method that you should use to check if any value is a number atleas when you're working with floating point numbers and if you are sure that you just need to check for an iteger then you can use isInteger as well:

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true, because this is also an integer, remember.
console.log(Number.isInteger(23 / 0)); //false
