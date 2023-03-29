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

//Traditional javascript Data Structures:
//1. Arrays
//2. Objects

//ES6:
//1. Sets
//2. Maps

//Sets:-
//a set is basically just a collection of unique values so that means that a set can never have any duplicates and that property makes them useful in certain situations

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
//all are strings here but ofcourse there could be different types in here so set can hold mixed data types
console.log(ordersSet);
//all the duplicates are gone, they are a bit simlilar to arrays(no key value pairs), it's just a bunch of values grouped together in this case into a set and just like arrays sets are also iterables

//set is still very different from an array
//1. because it's elements are unique
//2. the order of elements in set is irrelevant

console.log(new Set("Jonas")); //because strings are also iterables

console.log(ordersSet.size); //output: 3
console.log(ordersSet.has("Pizza")); //output: true
console.log(ordersSet.has("Bread")); //output: false

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

//In sets their are actually no indexes and infact there is no way of getting values out of a set and if we think about it then it makes sense so there's really no need for getting data out of a set that's because if all values are unique and if their order does not matter then there is no point of retrieving values out of a set. All we need to know to know is whether a certain value is in the set or not and that's why we have the 'has' method.
//If your goal is to actually store values in order and then retrieve it then the best use case, is to just use an array You wouldn't use a set for that and so again there's no need for getting values out of a set because if you need it then you will just use an array.

//Sets are also iterables:
for (const order of ordersSet) console.log(order);

//Practical Example:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = new Set(staff); //because array is an iterable
console.log(staffUnique);

const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
); //Output: 3

console.log(new Set("jonasschmedtmann").size); //otuput: 11
