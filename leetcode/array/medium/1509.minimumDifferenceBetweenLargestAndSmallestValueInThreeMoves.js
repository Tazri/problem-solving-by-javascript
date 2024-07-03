/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 3) {
    return 0;
  }

  const n = nums.length;

  nums.sort((a, b) => a - b);

  let min = Infinity;

  for (let i = 0; i < 4; i++) {
    const diff = nums[n - (4 - i)] - nums[i];

    min = Math.min(diff, min);
  }

  return min;
};

const one = [1, 5, 0, 10, 14];

console.log(minDifference(one));
