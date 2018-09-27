// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // make empty array of words
  // split string at ' '
  // for each word, cut off first letter, and upper case it.
  // join uppercased letter with rest of string
  // join array back to a string
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

console.log(capitalize('a short sentence'));

module.exports = capitalize;
