// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function easyPalindrome(str) {
//   return (
//     str
//       .split('')
//       .reverse()
//       .join('') === str
//   );
// }

// function easyPalindrome(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed === str;
// }

// this solution is repetitive. it compares all values twice.
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

console.log(palindrome('aabbaa'));

module.exports = palindrome;
