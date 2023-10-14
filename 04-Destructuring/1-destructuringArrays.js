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
};

//Destructuring in Arrays:-
//destructuring is an ES6 feature and it's basically a way of unpacking values from an array or an object into separate variables.

//So in other words destructuring is to break complex data structure down into a smaller data strucutre lika a variable.

//so for arrays we use destructruing to retrieve elements from the array and store them into variables in a very easy way.

const arr = [2, 3, 4];

//traditional
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
//[x,y,z] looks like an array but it's just a destructuring assignment and the original array ofcourse not affected.

//from object:
const [first, second] = restaurant.categories;
console.log(first, second);
//it will take the first two values

//what if we want first and third values?
const [first1, , second1] = restaurant.categories;
console.log(first1, second1);

//For Ex:- the owner now decided switch the main and the secondary category:
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

//another trick with destructuring is that we can have a function, return an array and then we can immediately destruct the result into different variables so this basically allows us to return multiple values from a fucntion:
//write a function to order food:
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//in this we recieve 2 return values from a function

//Destructuring with nested array:
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

//what if we actually wanted all the individual values?
//well then we would essentially have to do destructuring inside of destructuring
const nested1 = [2, 4, [5, 6]];
const [p, , [q, r]] = nested1;
console.log(p, q, r);

//there is just another feature of destructuring where we can also set default values for the variables when we are extracting them and that's gonna be very useful in the case that we don't know the length of the array:
//So if we have an array that is shorter than we might think then we might try to unpack the array in positions that don't even exist:

//Default values
const [d, e, f] = [8, 9];
console.log(d, e, f); //output: 8 9 undefined
//so this would basically be the same as trying to read the element at position number two of this array but it only has elements at position zero and one and there we get undefined

const [g = 1, h = 1, k = 1] = [8, 9];
console.log(g, h, k); //output 8 9 1
//this can get useful for ex- when we get data from an API