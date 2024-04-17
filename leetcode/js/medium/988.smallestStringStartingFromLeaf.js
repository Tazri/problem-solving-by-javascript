function getChar(n) {
  return "abcdefghijklmnopqrstuvwxyz"[n];
}

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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let smallest = "";

  function dfs(root, steak = "") {
    const char = getChar(root.val);
    const str = char + steak;

    if (!root.left && !root.right) {
      if (!smallest) {
        smallest = str;
      } else if (smallest > str) {
        smallest = str;
      }
    }

    root.left && dfs(root.left, str);
    root.right && dfs(root.right, str);
  }

  dfs(root, "");

  return smallest;
};

const rootOne = new TreeNode(
  0,
  new TreeNode(1, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(3), new TreeNode(4))
);

console.log(smallestFromLeaf(rootOne));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
