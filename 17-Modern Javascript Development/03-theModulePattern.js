//The module patter that we used to use before in order to implement modules in javascript and I believe that it's important that you understand this module pattern because you will still see it around and it's also a very good application of many of the stuff that we have been learning throughout the course.

//just like in regular modules, the main goal of the module pattern is to encapsulate functionality to have private data and to expose a public API and the best way of achieving all that is by simply using a function becuause function give us private data by default and allow us to return values which can become our public API, usually we write an iife(immediately invoked function expression) and the reason for that is because this way we don't have to call it separately and we can also ensure that it's only called once, so it's very important that this fucntion is only created once because the goal fo this function is not to reuse code by running it multiple times, the only purpose of this function is to create a new scope and return data just once:
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered form supplier `);
  };

  //returning public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);

console.log(ShoppingCart2);

console.log(ShoppingCart2.shippingCost); //undefined
//the data that we wanted to encapsulate is not showing outside of the function
