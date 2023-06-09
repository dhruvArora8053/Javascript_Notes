"use strict";
///// Variables:-
//Box analogy to variable
//1. let,const,var = box
//2. varName = boxLabel
//3. value = boxContent

//variable declaration rules:
//1. camelcase
//2. cannot start with numbers
//3. no use of signs other than $ and _
//4. cannot use reserve keywords ex: new etc.
//5. 'name' kind of reserve keyword so do not use

//variable conventions:
//1. camelcase
//2. constants start with uppercase such as PI
//3. variable names should be descriptive

////Data Types:-
//seven primitive data types:
//1. number          let age=23;
//2. string          let firstName='jonas';
//3. boolean         let fullAge= true;
//4. undefined       let children; //notAValue
//5. null            'empty value'
//6. symbol          not useful for now
//7. big int

//javascript has a dynamic typing: no need to give datatypes and we can change variable from number to string with no problem at all.

console.log(typeof null); //output: object
//this makes no sense it is a bug in javascript language and they didn't remove it because of the legacy reasons

//////////let, const and var:-
//let: mutation possible

//const: mutation not possible
//       need to assign value while declaring
//       try to always use const

//var: mutation possible

// firstName = "schmedtmann"; //not legal

////////Basic Operators:
console.log(2 ** 3); //output: 8

const firstName = "jonas";
const lastName = "schmedtmann";
console.log(firstName + " " + lastName); //output: jonas schmedtmann

///////Strings and template literals(``):-

//////////Type conversion and type coercion:-
//Type conversion:- type conversio is when we manually convert from one type to another
const inputYear = "1991";
console.log(inputYear + 19); //199119, converted to string
console.log(Number(inputYear) + 19); //2010

console.log(Number("Jonas")); //NaN

console.log(String(23));

//Type coercion: when javascript automatically converts types behind the scenes for us.
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3); //23103
//string + number = string

console.log("23" - "10" - 3); //10
//string - number = number

console.log("23" * "2"); //46
//string * string = number
//same for division

let n = 1 + "1";
n = n - 1;
console.log(n); //10

console.log(2 + 3 + 4 + "5"); //95
console.log("10" - "4" - "3" - 2 + "5"); //15

////////Falsy values:-
//1. 0
//2. ''
//3. undefined
//4. null
//5. NaN

console.log(Boolean()); //false
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true
console.log(Boolean("")); //false
console.log(Boolean("jonas")); //true

/////Equality Operators ==VS=== :-
//===: strict equality operator
//     no type coercion

//==: loose equality operator
//    can do type coercion

//////Switch statement:-
//alternative of if-else
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("1");
    break;
  case "tuesday":
    console.log("2");
    break;
  case "wednesday":
    console.log("3");
  case "friday":
    console.log("4");
    break;
  case "saturday":
    console.log("5");
    break;
  case "sunday":
    console.log("6");
    break;

  default:
    console.log("not a valid day");
}

/////Statements and Expressions:-
//3+5 : expression

if (23 > 10) console.log("23 is bigger"); //statement

//expression produce values
//statements are like full sentences that translate our actions

/////The Conditional Ternary Operator:-
