"use strict";
//Prev lect: on the banist app: intl date

const num = 3884764.23;
console.log("US:     ", new Intl.NumberFormat("en-US").format(num));
console.log("Germany:", new Intl.NumberFormat("de-DE").format(num));
console.log("Syria:  ", new Intl.NumberFormat("ar-SY").format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

const options = {
  style: "currency", //unit, percentage
  unit: "mile-per-hour",
  currency: "EUR", //we have to define currecny manually
//   useGrouping: false,
};

console.log("US:     ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany:", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:  ", new Intl.NumberFormat("ar-SY", options).format(num));


//Half Part: Bankist App: implementing currencies