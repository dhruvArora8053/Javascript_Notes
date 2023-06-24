//Starting from the ES22 we can now use the await keyword outside of async functions, at least in moudles which we call top level await. Just remember this only works in modules if we were gonna try this in normal script then top level await would still fail.
//To run this: we need to have type="module" in our html file
console.log('Start Fetching');

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);
// but the problem with this is it actually blocks the code:
console.log('Something');
//an so infact this wait keyword here which is now outside of an async function is blocking the entire execution of this module

//Another Exmaple:
const get