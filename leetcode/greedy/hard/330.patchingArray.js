/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let maxReach = 0;
  let patch = 0;
  let i = 0;
  while (maxReach < n) {
    if (nums[i] <= maxReach + 1 && i < nums.length) {
      maxReach += nums[i];
      i++;
    } else {
      maxReach += maxReach + 1;
      patch++;
    }
  }

  return patch;
};

const inputOne = [[1, 5, 10], 20];

console.log(minPatches(...inputOne));
