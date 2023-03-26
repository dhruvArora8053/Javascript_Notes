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

//Properties of logical operator:
//1. They can use any datatype
//2. They can return any datatype
//3. They do short-circuiting/short-ciruit evaluation

console.log(3 || "Jonas"); //output: 3
//so you see the result is 3 and so that means that the results of the OR operator doesn't always have to be a boolean
//so infact, here we used two values that are not booleans and it then returned a value that was not a boolean

//OR short circuiting: in the case of the OR operator short circuiting means that if the first value is a truthy value it will immediatedly return that first value so that's exactly what we see here with 3 which is a truthy value.

//So again if the first operand is truthy here in the OR operator then the other operand will not even be evaluated so javascript will not even take a look at it

console.log("" || "Jonas"); //output: Jonas
console.log(true || 0); //output: true

console.log(undefined || null); //output: null
//undefined is a falsy value and so then we go to the second operand so there's no short circuiting and so that's then the one that's gonna be returned. So here we in the output 'null' and that happens even though null is also a falsy value.

console.log(undefined || 0 || "" || "Hello" || 23 || null); //output: Hello

//Practical Example:

//with ternary operator
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //output: 23

//with short-circuiting OR operator
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //output: 23

//this won't work when the number of guests is zero
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests3); //output: 10

//with short-circuiting OR operator
const guests4 = restaurant.numGuests || 10;
console.log(guests4); //output: 10

//but given what we already know it makes sense, becuse restaurant.numGuest is zero so it's a falsy value and therefore the second one here will be the result. However zero is the real number of guests and so that's the value that we actually would guests to have but instead it's set the default value of 10 so that's obviously not what we want and we will explore the solution in the next lecture of "The Nullish Coalescing Operator"

console.log("---------AND----------");
//basically when it comes short circuit evaluation the AND operator works in the exact opposite way of the OR operator
console.log(0 && "Jonas"); //output: 0
//it means that the AND operator short circuits when the first value is falsy and then immediately returns that falsy value without even evaluating the second operand.

console.log(7 && "Jonas"); //output: Jonas
console.log("Hello" && 23 && null && "Jonas"); //output: null

//Practicaly example:
//traditional way
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

//short circuiting with AND
restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");
//if restaurant.orderPizza does not exist so it's undefined it will then short circuit the evaluation and nothing else will happen but if it does exist so if it's a truthy value then the second part here will be evaluated and so here in this second operand we can then call the function


