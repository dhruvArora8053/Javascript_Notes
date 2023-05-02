'use strict';

//1. Let's go back to the lottery example from the slides and basically simulate a lottery using a promise here and remeber that in that example a fulfilled promise means to win the lottery while a rejected promise means to lose, creating a new promise using the Promise constructor:
const lotteryPromise = new Promise(function (resolve, reject) {
  //3. now in our lottery example let's say that we actually win in 50% of the cases and lose in the other 50%
  //   if (Math.random() >= 0.5) {
  //     resolve('You win 💰');
  //     //so in this situation we say that we win the lottery and so therefore that means a fulfilled promise and in order to set the promise as fulfilled we use the resolve function so basically calling the resolve function like this wil mark this promise as a fulfilled promise which we can also say a resolved promise and that's the reason why this method here is called resolve now into the resolve function here we pass a fulfilled value of the promise so then it can later be consumed with the then method so ofcourse we're going to handle the result of this promise just like we handled any other promise with the then method so again whatever value we pass into the resolve function here is gonna be the result of the promise that will be available in the then handler
  //   }
  //   //let's now handle the opposite case:
  //   else {
  //     reject('You lost your money 🥹');
  //   }

  console.log('Lottery draw is happening ⌛');
  setTimeout(() => {
    if (Math.random() >= 0.5) resolve('You win 💰');
    else reject(new Error('You lost your money 🥹')); //made this message an object
  }, 2000);
});
//4. here we created an executor function which is gonna be called by the Promise constructor as soon as it runs so basically immediately then the promise calls the function and passes in the resolve and reject funcitons so that we can then use them to mark the promise as either resolved so as fulfilled or as rejected and so you see that this promise is eventually going to move to either the fulfilled state or the rejected state so we always need to make sure that the promise ends up in one of these 2 states and so now it's time to actually try this out by consuming this promise that we just built:
lotteryPromise
  .then(resolved => console.log(resolved))
  .catch(err => console.error(err));
//5. promise successful --> You win 💰
//   promise unsuccessful --> You lost your money 🥹

//6. right now this is not really aysnchronous yet so let's actually simulate this lotter draw by a simple timer: above

//7. so this is how we encapsulate any asynchronous behavior into a promise and then all we have to do is to consume that promise like above before 5., Now in practice most of the time all we actually do is to consume the promises and we usually only built promises to basically wrap old callback based functions into promises and this is a process that we call promisifying so basically promisifying means to convert callback based asynchronous behavior to promise based so let's see that in action a little bit:


//2. now this means that promises are essentially just a special kind of object in javascript, now the promise constructor takes exactly one argument and that is the so-called executer function. Now as soon as the promise constructor runs it will automatically execute this executor function that we pass in and as it executes this function here it will do so by passing in two other arguments and those arguments are the resolve and reject functions. All of this will create a new promise that we're gonna store into lotteryPromise variable so it's just like for ex: the fetch function which also creates a new promise, now this executor function that we specified is the function which will contain the asynchronous behavior that we're trying to handle with the promise so this executor function should eventually produce a result value so the value that's basically gonna be the future value of the promise so let's do that right here in the executor function above:
