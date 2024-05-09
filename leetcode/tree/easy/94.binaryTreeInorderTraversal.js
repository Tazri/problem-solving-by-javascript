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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [];
  let current = root;

  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
};

var inorderTraversalUsingRecursive = function (root) {
  if (!root) return [];

  const result = [];

  function solve(root) {
    if (root.left) {
      solve(root.left);
    }

    result.push(root.val);

    if (root.right) {
      solve(root.right);
    }
  }

  solve(root);

  return result;
};

const inputOne = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(inorderTraversal(inputOne));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
