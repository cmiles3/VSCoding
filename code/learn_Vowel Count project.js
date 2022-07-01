function countVowels(word) {
    // 0. set a vowelCounter variable
    // 1. iterate through incoming word
    // 2. checking whether the current letter is a vowel
    // 3. increment the vowelCounter vowel if the current letter is a vowel

    let vowelCounter = 0;
    let index = 0;

    while (index < word.length) {
        let letter = word[index];

        if (letter === 'a' || 
            letter === 'e' || 
            letter === 'i' || 
            letter === 'o' || 
            letter === 'u') {
          vowelCounter += 1;
        }
        index++; 
    }
    return vowelCounter;
}
console.log(countVowels('coconuts'));

// SOLUTION ABOVE from appAcademy lesson

/*function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelsCount++;
                break;
            default:
                break;
        }
    }
    return vowelsCount;   
}
console.log('Number of vowels in this word ->  ' + getCount('congratulations'));
*/
// SOLUTION ABOVE found on YouTube


// BROKEN CODE 6x (best so far)
/*
let vowels = ['a', 'e', 'i', 'o', 'u'];
vowelCount = 0
strArr = 0;
arrIndx = 'cat'[strArr];
// console.log(arrIndx);
function words(strNam) {
    for (let i = 0; i <= strNam.length - 1; i++) {
        if (strNam[i] == arrIndx) {
            vowelCount = vowelCount + 1;
        } else {
            console.log('The number of vowels in ' + strNam + ' is ' + vowelCount);
        }
    }
}
words('strong');
*/

// BROKEN CODE 5x
/*
let vowels = ['a', 'e', 'i', 'o', 'u'];
element = 'a'
//console.log(vowels.indexOf(element));
function counter(x) {
    console.log(x.indexOf(vowels));    
}
counter('hope');
*/


// BROKEN CODE 4x
/*
let vowels = ['a', 'e', 'i', 'o', 'u'];
let alpha = [
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z"
  ];
let x = 0
function vCount (word1, indx) {
    while (word1.indexOf(vowels) != -1) {
        x++;
        console.log(x);
    }
}
vCount('carrot');
*/


// BROKEN CODE 3x
/*
let indices = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

function countV(word) {
    let idx = word.indexOf(vowels);
    while (idx != -1) {
//        idx = indices++;
        idx = word.indexOf(vowels, idx + 1);
    }
}
console.log(countV('harder'));
*/



// *** BROKEN CODE 2x
/*
const vowels = ['a', 'e', 'i', 'o', 'u'];

// >have user input a string
//    --input text into a function
function vowelCount(word) {
// >count the vowels in the string
//    --set a var for the number of vowels
    let vCount = 0;
//    --increment the var per vowels in the string
    if (word.indexOf([vowels]) === -1) {
        console.log('There are ' + vCount + ' vowels.');
    } else {
        vCount + 1;
// >output the number of vowels for the string
//    --print the var with the total of vowels
        console.log(vCount);
    }
}
console.log(vCount);
*/



// *** BROKEN CODE 1x
/*
function countVowels(word) {
    for (let xVow = 0; xVow >= countNum; xVow + 1);
        return console.log(xVow);
    } 
countVowels('young');
*/