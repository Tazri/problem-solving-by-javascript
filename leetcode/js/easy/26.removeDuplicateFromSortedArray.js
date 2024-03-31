/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let finalNums = [nums[0]];
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (prev === nums[i]) {
      continue;
    }
    finalNums.push(nums[i]);
    prev = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (i <= finalNums.length - 1) {
      nums[i] = finalNums[i];
    } else {
      nums[i] = "_";
    }
  }

  return finalNums.length;
};

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
console.log(nums);
