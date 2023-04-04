"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filtering out the deposits from the movements array:
const deposits = movements.filter((mov, i, arr) => mov > 0);
console.log(movements);
console.log(deposits);

//filtering out the withdrawals from the movements array:
const withdrawals = movements.filter((mov, i, arr) => mov < 0);
console.log(withdrawals);

//Why can't we use forOf loop here?
//1.chaining
//2.push towards functional programming
