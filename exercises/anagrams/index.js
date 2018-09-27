// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

console.log(anagrams('Hello there', 'Helllo there'));

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   // gets the total number of characters from each string
//   const sumA = Object.values(aCharMap).reduce((sum, elem) => sum + elem);
//   const sumB = Object.values(bCharMap).reduce((sum, elem) => sum + elem);

//   // if they are not the same length, then they are not equal
//   if (sumA !== sumB) {
//     return false;
//   }

//   // if a character is not found in one of the objects, then it is not a match
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }
