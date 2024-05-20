/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) nums.push(nums[i]);

  return nums;
};

const inputOne = [1, 2, 1];
console.log(getConcatenation(inputOne));
