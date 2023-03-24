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
};

//to destructure objects we use curly braces {}, then all we have to do is to provide the vairable names that exactly match the property names that we want to retrieve from the object.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//this now will create three brand new variables based on this restaurant object

//Why this is very useful addition to language?
//this is an extremely useful addition to language especially when we deal with the result of an API call which basically means to get data from another web application like weather data or data about movies or something like that and this data usually comes in the form of objecs basically and then destructuring is a life saver, it allows us to write a lot less code.

//Different Name:
//what if we wanted the variable names to be different from the property names?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default values:
//it can be really useful to have default values for the case that we're trying to read a property that does not exist on the object so usually then we get undefined for example if we were trying to say 'restaurant.menu' this would be undefined because there is no property called menu:

//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//without menu set to [], then we would get undefined

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a,b}= obj //output: syntax error
//and the reason for that is that when we start a line with a curly brace like this then javascript expects a code block and since we cannot assign anything to a code block like we did here with equal sign then we get this error 'unexpected token with the equal there', so to solve this here the trick is to wrap all of this into a parenthesis:
({ a, b } = obj);
console.log(a, b);

//Destructring in nested objects:
const {
  fri: { open: o=1, close: c=1 },
} = openingHours; //openingHours has already been destructured above
console.log(o, c);

//Practical Example:
//so many times in javascript  we have functions with a lot of parameters but then it can be hard to know the order of parameters for someone that is using this function and so instead of defining the parameters manually we can just pass an object into the function as an argument and the function will then immediately destructure that object:
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
//and so indeed we get this complete string based on the data that we passed in the single object, we only passed in one object into this function, we did not pass four arguments it's really just one argument, one object then here above in object method as we recieve that object, we do immediately destructring and so that's why these names here need to be exactly the names that we have down here in the object but what's great about this is that here the properties in the index don't have to match the order in which we do destructuring up here so that makes it really easy for the user of this function to specify basically the arguments.

//with defualt values
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});
