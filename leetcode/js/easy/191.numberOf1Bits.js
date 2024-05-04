/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let total = 0;
  while (n) {
    if (n & 1) total++;
    n >>= 1;
  }

  return total;
};

console.log(hammingWeight(11));
