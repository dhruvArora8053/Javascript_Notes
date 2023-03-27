"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //before ES6:
  //   openingHours: openingHours,

  //modern:
  openingHours,
  //property name and object name should be the same otherwise javascript will not know what this variable is

  //adding a method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//so we learned about the for of loop to loop over arrays which remember is an iterable but we can also loop over objects which are not iterable but in an indirect way

//PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties); //array of keys

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  //   console.log(day);
  //so indeed we get thu,fri and sat which are the exactly the three key names of the object
}
for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

//PROPERTY NAMES+VALUES: ENTIRE OBJECT
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  //   console.log(entry);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

