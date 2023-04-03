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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Rest pattern:
//rest pattern looks exactly like the spread operator so it has the same syntax with the three dots but it actually does the opposite of the spread operator, it collects multiple elements and condense them into an array so that's really opposite of spread

//1. FOR DESTRUCTURING:
const arr = [1, 2, ...[3, 4]];
//this a spread syntax because we are using it on the right hand side of the assignment operator

const [a, b, ...others] = [1, 2, 3, 4, 5];
//this is a rest syntax because it is on the left side of the assignment operator and packing all the rest elements in the others variable
console.log(a, b, others);
//just like before the first and the second elements become this first and second variables but then here comes the rest pattern and so it's called rest because it will take the rest of the elements so the remaining elements of the array and then put them into a new array
//so while destructuring on the left-hand side, the remaining elements got stored into others by the help of rest pattern

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//and note here the rest syntax collects all the array elements after the last variable so in this case here risotto, so it does not include any skipped elements so it's really just the rest of the elements, So for this reason the rest pattern always must be the last in the destructuring assignment becuase otherwise how will javascript know until when it should collect the rest of the array right?
//1. rest pattern must be the last element
//2. there can only ever be one rest in any destructuring assignment

//Objects:
//let's now work here with openingHours and let's say we only want to select only Saturday here and then rest should go into a new object which are the weekdays so sat is weekend and fri and thu are the weekdays:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2. FOR FUNCTIONS:
//example funciton for debt:
const add = function (...numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

//another example:
restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
//the first argument was stored in mainIngredient parameter and then all the remaining arguments that were passed in were simply stored into otherIngredints arrya by using rest parameter syntax

restaurant.orderPizza("mushroom");
//here remaining arguments will be put in an empty array because ofcourse there are none and so there is nothing to collect into the array but we still get an empty array that we can work with if we want

