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

//this restaurant object here is an object literal so you can see that because we basically wrote this object literally in our code using the curly braces syntax so all of this object here has been written using the object literal syntax.

//Now ES6 introduce three ways which make it easier to write object literals so let's go through them one by one:

//1.
//first off let's say that we have an object that is outside of the restaurant object say openingHours but now still we want to have the openingHours object inside of the restaurant object
//before ES6: look above in object
//ES6 enhanced object literal: look above

//2.
//second enhancement is about to writing methods in objects so in ES6 we no longer have to create a property and then set it to a function expression,
//so we now have to just create a property without : and function keyword
//look above methods

//3.
//and finally the third enhancement is that we can now actually compute property names instead of having write them out manually
//look above weekdays

