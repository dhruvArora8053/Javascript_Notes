//Exporting Module
console.log("Exporting Module");

const shippingCost = 10;
export const cart = [];
//now the variables that are declared inside of a module are actually scoped to this module so basically inside a module, the module itself is like the top level scope and so by default this means that all top level variables are private inside of this variable so unlike traditional scripts which would put all of these variables here in the global scope so that's we cannot log shippingCost or cart in other importing file

//Exporting:
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

//   if(true){
//     export const addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart`);
//       };
//   }
//the export wouldn't work like this so it always have to be the top level code without any blocks

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as quantity};

//Default Exports:
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

//Blocking Code:
// console.log('Start fetching users');

// await fetch("https://jsonplaceholder.typicode.com/users");

// console.log('Finish Fetching');
//now the script.js actually has to wait for the code in shoppingCart.js to finish, this top-level await that we have here is infact blocking the execution not only in this module but alos in the module that is importing it 