"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function: basically taking another function as an argument
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
  //because functions also have methods beside methods functions can even have properties and one of them is the name property
};

transformer("Javascript is the best!", upperFirstWord);
//notice how we are only passing in the function value itself so really just the value and we are not calling this function here, we are only passing it in and it will be the transformer function calling this function

//another example
transformer("Javascript is the best!", oneWord);

//so let's recap, we're calling the transformer function here and into that function we are passing the callback function and remember that we call these functions that we pass 'oneWord&upperFirstWord' the callback functions and that's because we do not call them ourselves but instead we call javascript to basically tell them later and these cases callin them later happens inside of transformer function

//another example
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);
//just like our transformer function we pass in a callback function(high5) and this callback function in this case is also called the event handler or event listener so:
//addEventListener: is a higher-order function
//hight5: is a callback function

//another example
["Jonas", "Martha", "Adam"].forEach(high5);
//here once we used the concept of callback function here

//Why are callback functions so much used in javascript and why are they so helpful?
//1. Well the first big advantage of this is that it makes it easy to split up our code into more reusable and iterconnected parts
//2. Callback functions allow us to create abstarction: so what we did above in our code examples was to create a level of abstraction and abstraction is something really important in programming so basically what abstraction means is that we hide the detail of some code implementation because we don't really care about all that detail and this allows us to think about problems at a higher more abstract level and so that's why it is called an abstraction. So coming back to our first example, this transform function does not care at all how the string is transformed, it doesn't care about this level of detail, all that wants to do is to transform a string but it doesn't care how it should do it. So what I mean is that we could have taken 'upperFirstWord and oneWord' code and written it directly into transformer fucntion that would have worked just the same but instead we abstracted this code away into other functions so again we created a new level of abstarction and by doing this our main transformer function here is really only concerned with transforming the input string itself but no matter how that transforming itself actually works it's basically delegating the string transformation to the other lower level function which are 'upperFirstWord and oneWord'.