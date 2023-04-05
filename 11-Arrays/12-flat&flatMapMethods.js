"use strict";

//flat method:
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//what if we wanted to unpack these nested array and put all the elements in one big array:
console.log(arr.flat());
//so it removed the nested arrays and flattened the array which is why method is called flat

//another example:
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
//it still contains the third level arrays so it means the flat method only goes one level deep

console.log(arrDeep.flat(2));
//now it went two level deep where default is 1

//Half part: bankist app, lecture section
