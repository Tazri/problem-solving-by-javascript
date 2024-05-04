/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((p, n) => p ^ n, 0);
};

const n = [2, 2, 1];
console.log(singleNumber(n));
