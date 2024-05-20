/**
 *
 * @param {number[]} arr
 * @return {TreeNode}
 */
export function makeTree(arr) {
  const root = new TreeNode(arr[0]);
  arr.shift();
  let parents = [root];

  while (parents.length) {
    const children = [];

    while (parents.length) {
      const parent = parents.shift();

      const leftValue = arr.shift();
      const rightValue = arr.shift();

      // create left
      if (leftValue !== null && leftValue !== undefined) {
        const leftNode = new TreeNode(leftValue);
        parent.left = leftNode;
        children.push(leftNode);
      }

      // create right node
      if (rightValue !== null && rightValue !== undefined) {
        const rightNode = new TreeNode(rightValue);
        parent.right = rightNode;
        children.push(rightNode);
      }
    }

    parents = children;
  }

  return root;
}

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export function traverse(root) {
  console.log(root.val);

  root.left && traverse(root.left);
  root.right && traverse(root.right);
}
