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

//Maps:-
//A map is a data structure that we can use to map values to keys so just like an object data is stored in key value pairs in maps, now the big difference between object and maps is that the keys can have any type, it could even be objects or arrays or other maps so that can lead to some really great and advanced stuff

//Difference Object/Maps:
//1. Object keys: strings || Map keys: anytype

const rest = new Map();
//key-value pairs: doesn't have to be only strings
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze Italy");
rest.set(2, "Lisbon, Portugal");

console.log(rest.set(2, "Lisbon, Portugal"));
//calling the set method like this does not only update the map that it's called on but it also returns the map

//so again calling the set method returns the updated map and so all of this now is updated map and so we can call set again on that map:
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organice"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
console.log(rest);

//Reading data from map:
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get("true")); //datatype of the key matters
console.log(rest.get(1));

//Practical Example:
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); //output: We are open

//more methods:
console.log(rest.has("categories"));

rest.delete(2);
console.log(rest);

console.log(rest.size);

// rest.clear();
// console.log(rest);

//Using arrays and objects as map keys:
rest.set([1, 2], "Test");
console.log(rest);

//do you think it will retrieve rest:
console.log(rest.get([1, 2])); //output: undefined
//no it did not and the reason for that is that these two arrays are actually not the same object even though we wrote them in the same way and so they have the same elements but they are not the same object in the heap, above set key is exactly that object in memory not the below get one and so this cannot work. Inorder to make it work we would have to do:
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr)); //output: Test
//now this is goint to work because these two refers same place in the memory

console.log(rest);

//With DOM elements: dom elements also are special type of objects
rest.set(document.querySelector("h1"), "Heading"); //result of this is going to be the object
