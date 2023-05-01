'use strict';

//Now remeber that the implication of the fact that micro-tasks have priority over regular callbacks is that if one of the micro-tasks takes a long time to run then the timer will actually be delayed and not run after the zero seconds that we specified above so instead it will run a little bit later just after the micro-task is actually done with it's work, so let's simulate what we just said: on above code
console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test End');
//and so this is actual proof that these 0 seconds in setTimeout are not a guarantee so this means that you cannot really do high precision things using javascript timers
