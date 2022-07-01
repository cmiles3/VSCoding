// console.log('hello world im here');
// console.log('finally a challenge...');
// Learning number value usage and using operators
console.log(18 + 2); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125
// Learning complex expressions using multiple operators
console.log(5 * 3 + 1); // => 16
console.log(2 + 3 * 5); // => 17
console.log((2 + 3) * 5); // => 25
// Learning use of remainder operator (aka - modulo or 'mod')
console.log(10 % 3); // => 1
console.log(14 % 5); // => 4
console.log(20 % 17); // => 3
console.log(18 % 6); // => 0
console.log(7 % 9); // => 7
// modulo has precedence over addition
console.log(4 + 12 % 5); // => 6
console.log((4 + 12) % 5); // => 1
// Learning the use of Boolean Data Types
//   ! (not)   && (and)   || (or) 
// Logical NOT [ ! ]
console.log(!true); // => false
console.log(!!false); // => true
// Logical AND  [ && ] 
console.log(false && false); // => false
console.log(false && true); // => false
console.log(true && true); // => true
// Logical OR  [ || ]  *Only evaluates to FALSE when both input values are FALSE, otherwise evaluates to TRUE
console.log(false || false); // => false
console.log(false || true); // => true
console.log(true || true); // => true
// Boolean order of operations is not(!), and(&&), then or(||)
console.log(true || true && false); // => true
console.log(false && !(false || true)); // => false
// Learning Variable usage
let num = 5;
console.log(num); // => 5
// Using shorthand math operators to change the value of a variable
let number = 0;
number += 10; // equivalent to number = number + 10
number -= 2; // equivalent to number = number - 2
number /= 4; // equivalent to number = number / 4
number *= 7; // equivalent to number = number * 7
console.log(number); // 14
// Working with incremental operators
let year = 3004;
year++;
console.log(year); // 3005
year--;
console.log(year); // 3004
// *Note that calculation errors will lead to a 'NaN'(not a number) result
// 
// Using and working with strings
// Counting the characters in a string with (.length):
console.log("ramen".length); // => 5
console.log("go home!".length); // => 8
console.log("".length); // => 0
// Indexing a string
console.log("bootcamp"[0]); // => 'b'
console.log("bootcamp"[1]); // => 'o'
console.log("bootcamp"[2]); // => 'o'
console.log("bootcamp"[3]); // => 't'
console.log("bootcamp"[7]); // => 'p'
console.log("bootcamp"[10]); // => undefined
console.log("bootcamp"[-3]); // => undefined
// The 'Off by One' common error to keep in mind
// The index of a string is always one less than its length
console.log("cat".length); // => 3
console.log("cat"[3]); // => undefined
console.log("cat"[2]); // => 't' 
// Using indexOf
console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1
// Concatenation - use of + operator
console.log("hello" + "world"); // => 'helloworld'
console.log("goodbye" + " " + "moon"); // => 'goodbye moon'
//
// Writing and declaring FUNCTIONS
// Function definition
function average(number1, number2) {
    return (number1 + number2) / 2;
  }
  
  // This function call passes the arguments 10 and 16.
  average(10, 16)  // Returns 13
 
// Note: The above function code does not output unless edited
// 
// Breakdown of the Function above:
// 'function' - keyword to define/use a function 
// 'average' - declares a name for the function
// '(number1 & number2)' - declares variables used within the function
// ' { ' - opens the function to the statement below it
// 'return (number1 + number2) / 2;' - code/argument for the function to pass when invoked/called
// ' } ' - closes the function
//
// The below function call does output
 
  function callMe() {
    console.log("Second!");
    console.log("Third!");
  }
  
  console.log("First!");
  callMe();
  console.log("Fourth!");
  
  // Running this file will print these statements in this order:
  // "First!"
  // "Second!"
  // "Third!"
  // "Fourth!"
  //
  // Calling a function and returning a value.
  // Example:
  //
  function average(number1, number2) {
    return (number1 + number2) / 2;
  }
  
  const result = average(10, 16);   // The function call returns 13,
                                    // so the result variable is set to 13.
  
  // We can check what a function returns by printing its result:
  console.log(result);            // Prints 13
  
  // Alternatively, we can print the function invocation:
  console.log(average(10, 16));   // Prints 13
/*
// Ex.2 of using RETURN in a function
*/
function average(number1, number2) {
    let sum = number1 + number2;
    return sum;
    // Anything under the `return sum` statement will NOT be executed.
    console.log("this will not run");
    return false;
  }
  
let sum2 = average(2, 7); // Returns 9

console.log("This function prints: ", sum2);