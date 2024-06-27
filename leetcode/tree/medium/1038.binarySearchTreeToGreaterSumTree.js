import { makeTree } from "./../util.js";
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let sum = 0;
  function makeGst(root) {
    if (!root) return;

    makeGst(root.right);
    sum += root.val;
    root.val = sum;

    makeGst(root.left);
  }

  makeGst(root);
  return root;
};

const inputOne = makeTree([
  4,
  1,
  6,
  0,
  2,
  5,
  7,
  null,
  null,
  null,
  3,
  null,
  null,
  null,
  8,
]);

const output = bstToGst(inputOne);

function inorder(root) {
  root.left && inorder(root.left);
  console.log(root.val);
  root.right && inorder(root.right);
}

inorder(output);
