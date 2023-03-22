"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const sliceUpper = function (location) {
  return location.slice(0, 3).toUpperCase();
};

for (const flight of flights.split("+")) {
  // console.log(flight);
  const [type, from, to, time] = flight.split(";");
  // console.log(type, from, to, time);
  const output = `${type.includes("Delayed") ? "🛑" : ""} ${type.replaceAll(
    "_",
    " "
  )} ${sliceUpper(from)} to ${sliceUpper(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(40);

  console.log(output);
}
