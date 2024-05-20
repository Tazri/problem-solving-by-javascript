import { makeTree } from "./../util.js";

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  function solve(root) {
    if (!root.right && !root.left) {
      if (root.val === target) {
        return null;
      } else {
        return root;
      }
    }

    let right = null;
    let left = null;

    if (root.right) {
      right = solve(root.right);
    }

    if (root.left) {
      left = solve(root.left);
    }

    root.left = left;
    root.right = right;

    if (!root.left && !root.right && root.val === target) {
      return null;
    } else {
      return root;
    }
  }

  return solve(root);
};

const inputOne = [makeTree([1, 2, 3, 2, null, 2, 4]), 2];

console.log(removeLeafNodes(...inputOne));
