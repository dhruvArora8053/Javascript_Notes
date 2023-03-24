"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //adding a method
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//Spread Operator:
//we can use spread operator to basically expand an array into all it's elements so basically unpacking all the array elements at one

const arr = [7, 8, 9];
//suppose we want to create a new array based on this array but with some new elements at the beginning so how would we do that?

//traditional way:
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//modern way: spread operator
const newArr = [1, 2, ...arr];
//with spread operator it's like taking all the elements out of the array and writing them here manually

console.log(...newArr);

//Practical Example:
//in this example we will create an array with one more food item in the main menu array so that main menu is above at restaurant.mainMenu so basically we want to create a new menu
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//now you might have noticed that the spread operator is actually a bit similar to destructuring because it also helps us get elements out of arrays right?
//now the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables and as a consequence we can only use it in places where we would otherwise write values separated by commas.

//Use Cases of spread operator:
//1. to create shallow copies of array
//2. to merge two arrays together

//copy array:
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays together:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//The spread operator works on arrays as well as on so-called iterables
//What is an iterable?
//iterables are things like all [arrays, strings, maps, or sets] but not objects, so basically most of the built-in data structures in javascript are now iterables but except objects.

//since strings are also iterables that means that we can use the spread operator on a sting as well:
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); //output: error
//this won't work and that's because this is not a place that expects multiple values separated by comma, because multiple values separated by comma are usually only expected when we pass arguments into a function or when we build a new array.

//Note:- now just keep in mind that we can still only use the spread operator when building an array or when we pass values into a function

//Practical example:-
//write a function that accepts multiple arguments and then use the spred operator to actually pass those arguments:
// const ingredients = [
//   prompt("Let's make pata! Ingredient 1?"),
//   prompt("Let's make pata! Ingredient 2?"),
//   prompt("Let's make pata! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Since ES 2018, the spread operator actually works on objects even though objects are not iterables
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);
//this will basically copy all the properties of the restaurant into this new object and then we can add anything that we want and ofcorse here order does not matter as always so this spread here doesn't have to first one

//creating shallow copies of objects:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name); //output: Ristorante Roma
console.log(restaurant.name); //output: Classico Italiano
