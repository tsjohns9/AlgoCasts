// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function easyReverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function midReverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => character + reversed);
// }

// RECURSIVE

function reverse(str) {
  if (str === '') {
    return '';
  }
  return reverse(str.substr(1)) + str.charAt(0);
}

reverse('Apple');

module.exports = reverse;
