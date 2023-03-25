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

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Gioanni Rossi",
};

//let's pretend that we got these restaurants from some kind of API and now we want to apply something to all of them, so in this case basically adding the number of guests property to the objects that do not have them:

//Using OR operator:
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1, rest2);

//logical assignment operator:
//OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1, rest2);
//basically this operator assigns a value to a variable if that variable is currently falsy

//so this works beautifully except in one situation that we already encountered before in the previous lecture
const rest3 = {
  name: "Capri",
  numGuests: 0,
};

const rest4 = {
  name: "La Piazza",
  owner: "Gioanni Rossi",
};

rest3.numGuests ||= 10;
rest4.numGuests ||= 10;
console.log(rest3, rest4);
//it is back to being 10 even thought we set numGuests to 0 so can you guess why that is happening?
//well 0 is actually a falsy value and so this OR assignment operator is actually working just fine so rest3.numGuests here now is falsy and so therefore, it will then be assigned the value of 10.
//So again, the logical OR assignment operator will assign a value to a variable if that exact variable is falsy right now
//however, fortunately we have a good way of solving this:

//the logical nullish assignment operator: (null or undefined)
const rest5 = {
  name: "Capri",
  numGuests: 0,
};

const rest6 = {
  name: "La Piazza",
  owner: "Gioanni Rossi",
};

rest5.numGuests ??= 10;
rest6.numGuests ??= 10;
console.log(rest5, rest6);
//nullish assignment operator will assign a value to a variable if that exact variable is currently nullish

//Logical AND assignment operator:
//and to learn about this one let's say that we want to anonymize the names of the restaurant owners, so when there is currently is an owner like above in the object, we want to basically replace that string with the string 'anonymous'

//with short circuiting
// rest5.owner = rest5.owner && "anonymous";
// rest6.owner = rest6.owner && "anonymous";
// console.log(rest5, rest6);

//AND assignment operator
rest5.owner &&= "anonymous";
rest6.owner &&= "anonymous";

console.log(rest5);
console.log(rest6);
//in this case the result is even better now than what we had before with short circuiting becuse with this above code we actually had the owner set to undefined which was not really what we wanted now it is simply not here so basically what logical AND operator does is to assign a value to a variable if it is currently truthy so in the case of rest5.owner it was falsy because it didn't exist and so then nothing happened so the object stayed exactly the same but then with the rest6.owner was indeed truthy so it was 'Giovanni' before so it was replaced now with the other string 'anonymous'.

//so if you ever need to assing a value to a variable that is already defined so that has a value that is currently truthy then you can use this AND assignment operator.

//and if you ever need to assing a value to a variable that is not already defined so that has a no value that is currently falsy then you can use OR assignment operator.

