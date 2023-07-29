"use strict";

//Scoping:-
//hierarchy of scoping
//1. Global scope
//2. Function scope
//3. Block scope

//const and let follows block scope
//var do not follow block scope, it only follows functional scope

//Que: When you turned off stirct mode the add function inside of if block didn't remain block scoped?

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  return age;
}
//this calcAge function here is defined in a global scope and also this function here creates its own scope

const firstName = "Jonas"; //global variable
calcAge(1991);
//as you see this firstName variable is not actually in the scope of calcAge function however firstName is a global variable that we defined out here and so therefore through the scope chain it's gonna be made available also inside of calcAge function scope

//even though the firstName variable here was actually defined after the calcAge fucntion, the function will still run fine because remember that the code in the function is only executed once it's actually called and so that happens after the declaration of the firstName variable and so at this point in the code, the firstName variable is already in the global execution variable enviroment so in the global scope ready to be used.

function calcAge1(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName1},You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName1 = "Steven";
      //output will now change from jonas to steven that is becuase as always javascript tries to look for the variable name in the current scope and right now it actually is in the current scope so firstName1 is indeed in this same block and so therefore javascript will then use that variable and not perform any variable look up in the scope chain
      //but ofcourse then outside of this block the firstName1 variable is still gonna be the one coming from the scope chain so that's why you still see jonas on the console
      //and remember the both firstName1 are completely different variables they just happen to have same name
      const str = `Oh, and you're a millenial, ${firstName1}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //   output = 'NEW OUTPUT';
      //we did not create a new variable here, we simply redefined a variable that we accessed here from the parent scope

      const output = "NEW OUTPUT";
      //this now will be a completely different variable and would not affect the parent scope variable
    }

    // console.log(str); //error: str is not defined, becuase of outside of the block

    console.log(millenial); //output: true, because var is functional scoped

    // add(2,3) //error: add is not defined, because add function is defined inside of if block so this function is now a block scoped function

    console.log(output);
  }
  printAge();
  return age;
}

const firstName1 = "Jonas"; //global variable
calcAge1(1991);
// console.log(age); //error: age is not defined
// printAge(); //error: printAge is not defined, because this function is declared inside of the other function so it is not in a global scope.