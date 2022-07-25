//  MDN documentation:
//  Grammar and Types
//
//  Declarations
var x; var y = 0;
let canA; let canB = 0;
const cupA = 1; const cupB = 0;

// You can declare variables to unpack values from Object Literals using the Destructuring Assignment syntax.
let { bar } = foo;

//  Evaluating Variables
var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;
// This one may puzzle you until you read 'Variable hoisting' below

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;
