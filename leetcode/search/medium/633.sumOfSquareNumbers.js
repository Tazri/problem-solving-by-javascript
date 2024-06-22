/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  const root = Math.trunc(Math.sqrt(c));

  function isSquare(n) {
    const root = Math.sqrt(n);
    const trunc = Math.trunc(root);

    if (root === trunc) return true;
    return false;
  }

  for (let i = root; i >= 0; i--) {
    const square = i ** 2;
    const left = c - square;
    if (isSquare(left)) return true;
  }

  return false;
};

const inputOne = 1000;
console.log(judgeSquareSum(inputOne));
