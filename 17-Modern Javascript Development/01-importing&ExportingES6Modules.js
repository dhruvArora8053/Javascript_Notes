//Importing Module
import { addToCart, totalPrice, totalQuantity } from "./01-shoppingCart.js";
// '.' means current location

console.log("Importing Module");
//so here in the console we see that the first log is actually exporting module only then importing module is logged to the console and so this means that infact this shoppingCart code here is executed before any code in the importing module so again the code in this module here is parsed and before it is executed all the code in the modules that it imports is executed first and the same is true if we have the log of "Importing Module" before. So remember all the importing statements are basically hoisted to the top.
//And also not here we didn't use the strict mode and that's because all modules are executed in strict mode by default.

// console.log(shippingCost); //error

addToCart("bread", 5);
console.log(totalPrice);
console.log(totalQuantity);