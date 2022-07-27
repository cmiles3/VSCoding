//  MDN documentation:
//  Grammar and Types
//
//  Declarations
var xBar; var yBar = 0;
let canA; let canB = 0;
const cupA = 1; const cupB = 0;

// You can declare variables to unpack values from Object Literals using the Destructuring Assignment syntax.
let { bar } = foo;

//  Evaluating Variables
var aBat;
console.log('The value of a is ' + aBat); // The value of a is undefined

console.log('The value of b is ' + bBat); // The value of b is undefined
var bBat;
// This one may puzzle you until you read 'Variable hoisting' below

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;

/* You can use undefined to determine whether a variable has a value.
In the following code, the variable input is not assigned a value, and the if statement evaluates to true. */

let input;
if (input === undefined) {
    doThis();
} else  {
    doThat();
}

/* The undefined value behaves as false when used in a boolean context.
For example, the following code executes the function myFunction because the myArray element is undefined: */

const myArray = [];
if (!myArray[0]) myFunction();

// The undefined value converts to NaN when used in numeric context.

let a;
a + 2; // Evaluates to NaN

// When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts. For example:

const n = null;
console.log(n * 32); // Will log 0 to the console


/*
Variable hoisting
Another unusual thing about variables in JavaScript
is that you can refer to a variable declared later, without getting an exception.

This concept is known as hoisting. Variables in JavaScript are, in a sense, "hoisted"
(or "lifted") to the top of the function or statement. However, variables that are
hoisted return a value of undefined. So even if you declare and initialize after you
use or refer to this variable, it still returns undefined.
*/

/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';

(function() {
    console.log(myvar); // undefined
    var myvar = 'local value';
})();
