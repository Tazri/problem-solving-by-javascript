/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let stage = 0;
  let op = 0;

  for (const num of nums) {
    if (num === stage) {
      op++;
      stage = stage ? 0 : 1;
    }
  }

  return op;
};
