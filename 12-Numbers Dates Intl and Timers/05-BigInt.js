"use strict";

//As we learned that numbers are represented internally as 64 bits and that means that there are exactly 64 ones or zeroes to represent any given number, now of these 64 bits only 53 are used to actually store the digits themselves, the rest are for storing the position of the decimal point and the sign
//now if there are only 53 bits to store the number that means that there is a limit of how big numbers can be:
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
//and so this is essentially the biggest number that javascript can safely represent
//so any integer that is larger than this is not safe and that means it cannot be represented accurately

console.log(2 ** 53 + 1);
console.log(2 ** 53);
//so as we are seeing giving unprecise number in an output

//Starting from ES2020 a new primitive was added which is called BigInt and it can be used to store numbers as large as we want:
console.log(9457934575934579345290345808454);
//BigInt
console.log(9457934575934579345290345808454n);
console.log(BigInt(9457934575934));

//Operations with BigInt:
//all the usual operators still work the same
console.log(10000n + 10000n);
console.log(8040983427549745397534297453907453n * 100000000n);

// console.log(Math.sqrt(16n)); //error

//Mixing BigInt with regular numbers is not possible:
const huge = 345959437945379435793457n;
const num = 23;
// console.log(huge*num); //error

//let's convert
console.log(huge * BigInt(num));

//Exceptions:
//logical operators
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigint
console.log(20n == 20); //true

//string concatenations
console.log(huge + " is REALLY big");
//huge got converted to string

//Divisions:
console.log(10 / 3);
console.log(10n / 3n); //3n
//with bigint it will simply return the closest BigInt
