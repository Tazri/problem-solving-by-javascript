/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let isDifferent = false;

  function solve(p, q) {
    if (isDifferent) return false;

    if (p === null && q === null) {
      return true;
    } else if (p === null || q === null) {
      isDifferent = true;
      return false;
    }

    if (p.val !== q.val) {
      isDifferent = true;
      return false;
    }

    return solve(p.left, q.left) && solve(p.right, q.right);
  }

  return solve(p, q);
};

const inputOne = [
  new TreeNode(1, new TreeNode(2), new TreeNode(3)),
  new TreeNode(1, new TreeNode(2), new TreeNode(3)),
];

console.log(isSameTree(...inputOne));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
