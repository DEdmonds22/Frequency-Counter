// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (str1, str2) => {
    const nStr1 = str1.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();   // removes any special chars in the string and makes the entire string lowercase, then assigns the new value to a variable we can access within the function
    const nStr2 = str2.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();   // removes any special chars in the string and makes the entire string lowercase, then assigns the new value to a variable we can access within the function

    if (nStr1.length !== nStr2.length) {
        return false
    }

    let let1Val1 = {};
    let let2Val2 = {};

    for (let letter of nStr1) {
        let1Val1[letter] = (let1Val1[letter] || 0) + 1;
    }

    for (let letter of nStr2) {
        let2Val2[letter] = (let2Val2[letter] || 0) + 1;
    }

    for (let pair in let1Val1){
        if (let1Val1[pair] !== let2Val2[pair]) {
            return false;
        }
    }
    return true;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
