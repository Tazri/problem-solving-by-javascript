import { makeTree } from "./../util.js";
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;

  function solve(root) {
    if (root.val >= low && root.val <= high) sum += root.val;

    // traverse left
    if (root.left && root.val >= low) solve(root.left);

    // traverse right
    if (root.right && root.val <= high) solve(root.right);
  }

  solve(root);

  return sum;
};

const inputOne = [makeTree([10, 5, 15, 3, 7, null, 18]), 7, 15];
const inputTwo = [makeTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10];

console.log(rangeSumBST(...inputTwo));
