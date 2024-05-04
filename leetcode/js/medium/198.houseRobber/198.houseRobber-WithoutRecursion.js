/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);
  // memozation
  const map = new Map();

  nums.unshift(0);

  for (let i = 2; i < nums.length; i++) {
    const stealMoney = nums[i] + nums[i - 2];
    const skipMoney = nums[i - 1];
    nums[i] = Math.max(stealMoney, skipMoney);
  }

  return nums[nums.length - 1];
};

const houses = [2, 7, 9, 3, 1];

console.log(rob(houses));
