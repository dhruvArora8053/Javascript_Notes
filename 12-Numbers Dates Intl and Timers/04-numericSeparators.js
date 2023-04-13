"use strict";

//287,460,000,000
const solarDiameter = 287_460_000_000;
console.log(solarDiameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee = 15_00;
const transferFee1 = 1_500;

// const PI= 3._1415 //invalid
// const PI= _3.1415 //invalid
// const PI= 3.14__15 //invalid

console.log(Number("230000"));
console.log(Number("230_000")); //NaN
console.log(Number.parseInt("230_000")); //230
//so you should really only use these numeric separators when you are writing down numbers, so if you get a number as a string from an API, you should not use uderscores in there because then javascript will not be able to parse the number correctly out of that string

