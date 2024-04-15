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
var sumNumbers = function (root) {
  let sum = 0;
  let number = 0;

  function traverse(root, level) {
    // console.log(`before update : ${number}`);
    if (!number) {
      number = root.val;
    } else {
      number = number * 10 + root.val;
    }

    // console.log(`root : ${root.val}, number : ${number}\n\n`);

    if (root.left) {
      traverse(root.left, level * 10);
    }

    if (root.right) {
      traverse(root.right, level * 10);
    }

    if (!root.left && !root.right) {
      sum += number;
    }
    number = Math.floor(number / 10);
  }

  traverse(root, 1);

  return sum;
};

const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const root = new TreeNode(
  4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0)
);

console.log(sumNumbers(root1));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
