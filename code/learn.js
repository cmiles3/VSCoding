// loop iteration practice

// Conditional
x = 0
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  console.log(testNum(-5));
  // expected output: "NOT positive"

// Loop
  let str = '';

  for (let i = 0; i < 9; i++) {
    str = str + i;
  }

  console.log(str);
  // expected output: "012345678"
