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

//let's say that we wanted to get the opening hours of our restaurant monday:
console.log(restaurant.openingHours.mon); //output: undefined
//because mon property doesn't exist

//let's pretend that we don not know whether this restaurant opens on Monday or not and that could be the case for example if this data came from a real web service/API and in their service there could be multiple restaurants and not all of them would open on Monday and so we had no way of knowing if this particular restaurant would open on monday or not

//let's go even further because we actually want to know exactly the hour on which the restaurant opens on monday:
// console.log(restaurant.openingHours.mon.open); //output: error 'cannot read property of undefined'

//so in order to avoid this error we would first have to check if 'mon' property actually exists

//traditional way
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//ES2020 optional chaining:
//it is a feature if a certain property doesn't exist then undefined is returned immediatedly and so that to avoid that kind of error that we saw earlier
console.log(restaurant.openingHours.mon?.open); //output: undefined
//so only if 'mon' exists then this open property will be read from there but if not then immediately undefined will be returned
//and exists here actually means the nullish concept that we already talked before so a property exists if it's not null and not undefined so if it's 0 or the empty string then it still exists ofcourse.

console.log(restaurant.openingHours?.mon?.open);
//and now if the restaurant.openingHours does not even exist well then the 'mon' property will not even be read and so therefore we don't get that error

//Practical Example:
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//what we want to do is to loop over this array and then log to the console whether the restaurant is open or closed on each of the days

for (const day of days) {
  // console.log(day);
  // restaurant.openingHours.day
  //we cannot use .day notation because this is not an actual property name of the object so rember if we want to use a variable name as the property name then we would need to use the brackets notation:
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

//Optional chaining on methods:
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); //output:['Focaccia', 'Pasta']

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); //output: method does not exist
//and so just like before this optional chaining operator will check if orderRisotto actually exists and if it doesn't well then it immediately return undefined

//Optional chaining on Arrays:
const users = [{ name: "Jonas", email: "hello@jona.io" }];

console.log(users[0]?.name ?? "User array empty"); //output: Jonas
console.log(users[2]?.name ?? "User array empty"); //output: "User arry empty"


