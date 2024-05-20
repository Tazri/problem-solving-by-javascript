import { makeTree } from "./../util.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let maxDepth = 0;
  let sum = 0;

  function dfs(root, depth = 0) {
    root.left && dfs(root.left, depth + 1);
    root.right && dfs(root.right, depth + 1);

    // if it is leap
    if (!root.left && !root.right) {
      if (maxDepth === depth) {
        sum += root.val;
      }

      if (maxDepth < depth) {
        maxDepth = depth;
        sum = root.val;
      }
    }
  }

  dfs(root);

  return sum;
};

const inputOne = makeTree([
  1,
  2,
  3,
  4,
  5,
  null,
  6,
  7,
  null,
  null,
  null,
  null,
  8,
]);

const inputTwo = makeTree([
  6,
  7,
  8,
  2,
  7,
  1,
  3,
  9,
  null,
  1,
  4,
  null,
  null,
  null,
  5,
]);

console.log(deepestLeavesSum(inputTwo));
