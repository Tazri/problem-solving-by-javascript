import { makeTree } from "./../util.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
  let move = 0;

  function solve(root) {
    if (!root) return 0;

    const leftCoin = solve(root.left);
    const rightCoin = solve(root.right);

    move += Math.abs(leftCoin) + Math.abs(rightCoin);

    const totalCoin = root.val + leftCoin + rightCoin;

    // return the extra coin
    return totalCoin - 1;
  }

  solve(root);

  return move;
};

const inputOne = makeTree([0, 3, 0]);
const inputTwo = makeTree([0, 0, 0, 2, null, 2, 2]);
const inputThree = makeTree([0, 0, 2, 0, null, 2, 2]);

console.log(distributeCoins(inputTwo));
