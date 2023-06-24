//Importing Module
// import { addToCart, totalPrice as price, quantity } from "./01-shoppingCart.js";
// '.' means current location

console.log("Importing Module");
//so here in the console we see that the first log is actually exporting module only then importing module is logged to the console and so this means that infact this shoppingCart code here is executed before any code in the importing module so again the code in this module here is parsed and before it is executed all the code in the modules that it imports is executed first and the same is true if we have the log of "Importing Module" before. So remember all the importing statements are basically hoisted to the top.
//And also not here we didn't use the strict mode and that's because all modules are executed in strict mode by default.

// console.log(shippingCost); //error

// addToCart("bread", 5);
// console.log(price);
// console.log(quantity);

//importing all the exports of a module at the same time:
// import * as ShoppingCart from './01-shoppingCart.js'
// console.log(ShoppingCart);

// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice);
//it looks pretty similar to classes and we can also say that a module export kind of an public API because everything else ofcourse stays private inside of a module

//Default import:
// import add, {
//   addToCart,
//   totalPrice as price,
// } from "./01-shoppingCart.js";

// add("pizza", 2);
// console.log(price);
//we should not mix named and default exports like we did here above to avoid the complexity

// import add from "./01-shoppingCart.js";

// add("pizza", 2);
// console.log(price);
//so the prffered style is actually to just use one default export per module and then import that here like we did

//again we should not do this
import add, { cart } from "./01-shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);
//imports are not the copy of exports, they are instead like a live connection and so what that means is I point to the same place in a memeory because otherwise if it was a copy then here we would not get anything in the array

//My Example:-
// const bike = [];
// const bikeDetails= function(brand, model){
//     bike.push({brand, model})
// }

// bikeDetails('bajaj', 'pulsar')
// console.log(bike);
