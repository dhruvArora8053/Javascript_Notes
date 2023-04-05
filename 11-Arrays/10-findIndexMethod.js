"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//findIndex: it returns the first index of an element out of the filtered elements:
const firstIndex = movements.findIndex((mov) => mov < 0);
console.log(firstIndex); //2
