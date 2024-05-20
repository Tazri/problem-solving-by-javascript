import { makeTree } from "./../util.js";
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function (root) {
  if (root.left && root.right) {
    if (root.val === 2)
      return evaluateTree(root.left) || evaluateTree(root.right);
    if (root.val === 3)
      return evaluateTree(root.left) && evaluateTree(root.right);
  }

  if (root.left) {
    return evaluateTree(root.left);
  }

  if (root.right) {
    return evaluateTree(root.right);
  }

  return !!root.val;
};

const inputOne = makeTree([2, 1, 3, null, null, 0, 1]);
const inputTwo = makeTree([0]);

console.log(evaluateTree(inputTwo));
