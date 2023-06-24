//Export
export.addToCart=function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };
  //this woudn't work in a browser but it would work in node.js, in nodejs export is an important object that is used 

  //Import 
  const {addToCart}= require('./01-shoppingCart.js')