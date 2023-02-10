//  MDN documentation:
//  Grammar and Types

/*
let noodle = 5;
console.log(noodle);


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

// You can use undefined to determine whether a variable has a value.
// In the following code, the variable input is not assigned a value, and the if statement evaluates to true.

let input;
if (input === undefined) {
    doThis();
} else  {
    doThat();
}

// The undefined value behaves as false when used in a boolean context.
// For example, the following code executes the function myFunction because the myArray element is undefined:

const myArray = [];
if (!myArray[0]) myFunction();

// The undefined value converts to NaN when used in numeric context.

let a;
a + 2; // Evaluates to NaN

// When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts. For example:

const n = null;
console.log(n * 32); // Will log 0 to the console



// Variable hoisting
// Another unusual thing about variables in JavaScript
// is that you can refer to a variable declared later, without getting an exception.

// This concept is known as hoisting. Variables in JavaScript are, in a sense, "hoisted"
// (or "lifted") to the top of the function or statement. However, variables that are
// hoisted return a value of undefined. So even if you declare and initialize after you
// use or refer to this variable, it still returns undefined.

// Example 1
console.log(x === undefined); // true
var x = 3;


// Example 2

// will return a value of undefined
var myvar = 'my value';

(function() {
    console.log(myvar); // undefined
    var myvar = 'local value';
})();

// The above examples will be interpreted the same as:

// Example 1

 var x;
 console.log(x === undefined); // true
 x = 3;

// Example 2
 var myvar = 'my value';

 (function() {
   var myvar;
   console.log(myvar); // undefined
   myvar = 'local value';
 })();

 // Function Hoisting

 foo(); // "bar"
 // Function declaration
function foo() {
    console.log('bar');
}


// There are 8 Data Types (7 are primitives)
// 1. Boolean
// ex...
if (5 == 4) {
  console.log("boolean conditional resolved to true");
} else {
  console.log("boolean conditional resolved to false");
}
// 2. Null
// 3. Undefined
// 4. Number
// 5. BigInt - Integer w/ arbitrary precision
// 6. String
// 7. Symbol
// 8. Object - Only non-primitive


// Converting Strings to Numbers
// When a value representing a number is in memory as a string.
// First number in the argument is the string to be converted into a number
// Second number in the argument is the base (2-Binary, 8-Octal, 10-Decimal, 16-Hexadecimal, etc.)

console.log(parseInt('22')); // Returns the integer 22 as a number, not a string.
console.log(parseInt('101', 2) // Returns 5 as the integer which is base 2 (Binary) of the string number 101.

// The parseInt() function parses a string argument and returns an integer of the specified radix (radix is the base in mathematical numeral systems).
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed * 100;
}
console.log(roughScale(' 0xF', 16));
// expected output: 1500
console.log(roughScale('321', 2));
// expected output: 0


// The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}
console.log(circumference(4.567));
// expected output: 28.695307297889173
console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173
console.log(circumference('abcdefgh'));
// expected output: NaN

*/

// UNRELATED - Example of how to get a random number:
console.log(Math.floor(Math.random() * 12));

/*
// Working with LITERALS
// - ARRAY - Literals

// The .map() function creates a new array w/ the callback function argument, applied to a selected array.
const array1 = [1,4,9,16];
console.log(array1);
const map1 = array1.map(x => x * 2);
console.log(map1);

let fish = ['lion', 'tiger', 'bear'];
console.log(fish);
let fishX = fish.map(x => x + ' food');
console.log(fishX);


// - OBJECT - Literals

// The following is an example of an object literal.
// The first element of the car object defines a property, myCar,
// and assigns to it a new string, "Saturn"; the second element,
// the getCar property, is immediately assigned the result of invoking
// the function (carTypes("Honda")); the third element, the special property,
// uses an existing variable (sales).

const sales = 'Toyota';
function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell ", name, ".";
  }
}
const car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

// Additionally, you can use a numeric or string literal for the name
// of a property or nest an object inside another. The following example
// uses these options.

const car = { manyCars: { a: 'Saab', b: 'Jeep' }, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

*/

// END of what I plan to note in code - On to the next learning segment
