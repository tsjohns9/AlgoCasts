// --- Directions
// Given the root node of a tree, return
// an array where each element is the width (Breadth first traversal)
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // holds the width of each level
  const counters = [0];

  // holds the temporary values
  const arr = [root, 's'];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      arr.push(node);
      counters.push(0);
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
