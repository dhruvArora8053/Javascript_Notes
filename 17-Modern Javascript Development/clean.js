"use strict";

//Immutable Data Structure
const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

// budget[9] = "jonas"; //error
budget[0].value = 1000;
//however, object.freeze is not a deep freeze, it only works on the first level but their are 3rd party libraries which implements deep freeze

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200; //error

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (user) => spendingLimits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  // if (value <= getLimit(cleanUser)) {
  //   // budget.push({ value: -value, description, user:cleanUser });

  //   return [...state, { value: -value, description, user: cleanUser }]; //copying the object(array)
  // }

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10000, "Pizza 🍕");
console.log(newBudget1);

addExpense(budget, spendingLimits, 100, "Going to movies 🍿", "Matilda");
addExpense(budget, spendingLimits, 200, "Stuff", "Jay");

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = "limit";
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = "";
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
