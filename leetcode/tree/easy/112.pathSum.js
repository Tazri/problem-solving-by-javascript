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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let isPossible = false;

  function solve(root, sum = 0) {
    if (isPossible) {
      return 0;
    }

    if (root.left) {
      solve(root.left, root.val + sum);
    }

    if (root.right) {
      solve(root.right, root.val + sum);
    }

    if (!root.left && !root.right) {
      if (root.val + sum === targetSum) {
        isPossible = true;
      }
    }
  }

  solve(root);

  return isPossible;
};

const inputOne = [
  new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(1)))
  ),
  22,
];

console.log(hasPathSum(...inputOne));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
