// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let stringInt = n.toString();

//   if (stringInt[0] === '-') {
//     stringInt = stringInt.substr(1) + stringInt[0];
//   }

//   let reversed = '';

//   for (let numb of stringInt) {
//     reversed = numb + reversed;
//   }

//   return parseInt(reversed);
// }

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(500));

module.exports = reverseInt;
