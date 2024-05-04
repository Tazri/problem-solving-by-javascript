/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  nums.unshift(0);

  if (nums[nums.length - 1] >= nums[1]) {
    nums[1] = 0;
    for (let i = 2; i < nums.length; i++) {
      const stealMoney = nums[i] + nums[i - 2];
      const skipMoney = nums[i - 1];
      nums[i] = Math.max(stealMoney, skipMoney);
    }
    return nums[nums.length - 1];
  } else {
    return nums[nums.length - 1];
  }
};

const houseOne = [2, 3, 2]; // 3
const houseThree = [1, 2, 3, 1]; // 4
const houseTwo = [1, 2, 3]; //3
const houses = [200, 3, 140, 20, 10]; // 340

console.log(rob(houseThree));

// TODO