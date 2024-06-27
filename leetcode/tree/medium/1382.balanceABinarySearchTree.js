import { makeTree } from "./../util.js";
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  let nodes = [];

  function traverse(root) {
    root.left && traverse(root.left);
    nodes.push(root);
    root.right && traverse(root.right);
  }

  traverse(root);

  function solve(left = 0, right = nodes.length - 1) {
    if (left === right) {
      const node = nodes[left];
      node.left = null;
      node.right = null;
      return node;
    }

    const mid = Math.trunc((left + right) / 2);

    const midNode = nodes[mid];

    // left subtree
    let leftSubtree = null;

    if (left < mid) {
      leftSubtree = solve(left, mid - 1);
    }

    // right subtree
    let rightSubtree = null;
    if (right > mid) {
      rightSubtree = solve(mid + 1, right);
    }

    midNode.left = leftSubtree;
    midNode.right = rightSubtree;
    return midNode;
  }

  const newRoot = solve(0, nodes.length - 1);

  return newRoot;
};

const inputOne = makeTree([1, null, 2, null, 3, null, 4, null, null]);

const output = balanceBST(inputOne);

function traverse(root) {
  root.left && traverse(root.left);
  console.log(root.val);
  root.right && traverse(root.right);
}

traverse(output);
