/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = 0;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);

    if (0 < num && num <= len) {
      if (nums[num - 1] === 0) {
        nums[num - 1] = (len + 1) * -1;
      } else if (nums[num - 1] > 0) {
        nums[num - 1] *= -1;
      }
    }
  }

  for (let i = 1; i <= len; i++) {
    if (nums[i - 1] >= 0) {
      return i;
    }
  }
  return len + 1;
};

const arr = [1, 2, 3];

console.log(firstMissingPositive(arr));
