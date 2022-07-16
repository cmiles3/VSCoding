// ready to practice - Recursions and Tail Calls (Stuff I know nothing about yet)
// NOTE: Original code written in Python
// NON-TAIL CALL recursion example:
/*
let n = 0
function fact(n) {
    if (n <= 1);
        return 1
    return n * fact(n - 1);
}
fact(3);
3 * fact(2);
3 * 2 * fact(1);
3 * 2 * 1
3 * 2
6
 console.log(n);
*/
// BROKEN - Above code does not output
// Calculation has to store every recursive call in memory, this gets expensive.(O(recursion depth) space)
//
// With TAIL CALL recursion example:
//
/*
def facthelper(n, acc):
    if n <= 1:
        return acc
    return facthelper(n-1, n*acc)

def fact(n):
    return facthelper(n, 1)

    fact(3)
    facthelper(3,1)
    facthelper(2,3)
    facthelper(1,6)
    6
    6
*/
// BROKEN - Above code does not output
// This operates in constant memory, and is therefore a lot more efficient.
