// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stepsNotRecursive(n) {
  // create a grid of rows and columns
  // if the row is greater than or equal to the column, add a '#'
  // else, add a ' '
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (row >= column) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';

  return steps(n, row, stair + add);
}

steps(4);

module.exports = steps;
