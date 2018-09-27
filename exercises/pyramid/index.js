// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//      '  #  '
//      ' ### '
//      '#####'

// function nonRecursivePyramid(n) {
//   let width = 2 * n - 1;
//   let midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < width; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  const width = 2 * n - 1;
  const midpoint = Math.floor((2 * n - 1) / 2);

  if (row === n) {
    return;
  }

  if (row <= n) {
    //
  }
}

pyramid(4);

module.exports = pyramid;
