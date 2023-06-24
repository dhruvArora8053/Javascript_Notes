import * as ShoppingCart from './01-shoppingCart.js'

//Starting from the ES22 we can now use the await keyword outside of async functions, at least in moudles which we call top level await. Just remember this only works in modules if we were gonna try this in normal script then top level await would still fail.
//To run this: we need to have type="module" in our html file
console.log("Start Fetching");

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);
// but the problem with this is it actually blocks the code:
console.log("Something");
//an so infact this wait keyword here which is now outside of an async function is blocking the entire execution of this module

//Another Exmaple:
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
//   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost= getLastPost();
console.log(lastPost);
//data hasn't been yet arrived so we still have pending promise:

//not very clean
// lastPost.then(last=>console.log(last))

//clean
const last= await getLastPost();
console.log(last);
