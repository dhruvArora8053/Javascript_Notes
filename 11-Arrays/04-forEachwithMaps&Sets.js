"use strict";

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//forEach with maps:
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(map);
});

//forEach with sets:
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
  console.log(set);
});
//here what this means is that the key here is exactly the same as the value so why is that?
//well, because a set doesn't have keys and it doesn't have indexes either and so there is no value that would make sense for the key and it wouldn't even have to be there and so the people who designed this forEach method for sets they could have simply omitted the second argument right? Well if they did that then this forEach would have been different from the others and so that would then create confusion in developers and therefore it was decided to keep the same signature so basically to keep the same three parameters in thi callback function and simply to set the second one to the first one.
//'_': throw away variable
