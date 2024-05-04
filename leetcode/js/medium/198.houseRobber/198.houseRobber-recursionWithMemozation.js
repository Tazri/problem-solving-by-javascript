/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);
  // memozation
  const map = new Map();

  function solve(i) {
    if (i >= nums.length) return 0;

    if (map.has(i)) {
      return map.get(i);
    }

    // skip money
    const skipMoney = solve(i + 1);

    /// steal money
    const stealMoney = nums[i] + solve(i + 2);

    const max = Math.max(skipMoney, stealMoney);
    map.set(i, max);
    return max;
  }

  return solve(0);
};

const houses = [1, 2, 3, 1];

console.log(rob(houses));
