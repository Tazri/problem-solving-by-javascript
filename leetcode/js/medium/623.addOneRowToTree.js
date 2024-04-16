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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  const nodes = [];

  function goDepth(root, depth, targetDepth) {
    // console.log(`root : ${root.val} currentdepth : ${depth}`);
    // console.log(`target : ${targetDepth}`);
    // console.log("----\n");
    if (targetDepth <= depth) {
      nodes.push(root);
      return;
    }

    if (root.left) {
      goDepth(root.left, depth + 1, targetDepth);
    }

    if (root.right) {
      goDepth(root.right, depth + 1, targetDepth);
    }
  }

  goDepth(root, 1, depth - 1);

  for (node of nodes) {
    // update left
    const leftNode = node.left;
    node.left = new TreeNode(val, leftNode);

    // update right
    const rightNode = node.right;
    node.right = new TreeNode(val, null, rightNode);
  }

  // function traverse(root) {
  //   console.log(root.val);

  //   if (root.left) {
  //     traverse(root.left);
  //   }

  //   if (root.right) {
  //     traverse(root.right);
  //   }
  // }

  // traverse(root);

  return root;
};

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(3), new TreeNode(1)),
  new TreeNode(6, new TreeNode(5))
);

const root1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(3), new TreeNode(1))
);

const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3)
);

console.log(addOneRow(root2, 5, 4));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
