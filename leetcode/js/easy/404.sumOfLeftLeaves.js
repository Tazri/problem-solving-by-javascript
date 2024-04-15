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
var sumOfLeftLeaves = function (root) {
  let stack = [root];
  let sum = 0;

  while (stack.length) {
    let node = stack.pop();

    if (node.left) {
      stack.push(node.left);

      const left = node.left;

      if (!left.right && !left.left) {
        sum += node.left.val;
      }
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return sum;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
);

console.log(sumOfLeftLeaves(node));
