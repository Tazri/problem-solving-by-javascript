/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let op = 0;

  for (const num of nums) {
    const r = num % 3;
    if (!r) continue;

    op += 1;
  }

  return op;
};
