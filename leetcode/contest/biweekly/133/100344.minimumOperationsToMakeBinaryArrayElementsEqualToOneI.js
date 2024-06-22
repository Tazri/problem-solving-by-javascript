/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let op = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i]) continue;

    nums[i] = 1;
    nums[i + 1] = nums[i + 1] ? 0 : 1;
    nums[i + 2] = nums[i + 2] ? 0 : 1;
    op++;
  }

  let min = Math.min(nums.pop(), nums.pop());

  if (min) return op;
  return -1;
};

const inputOne = [0, 1, 1, 1, 0, 0];
const two = [0, 1, 1, 1];

console.log(minOperations(inputOne));
console.log("--------------");
console.log(minOperations(two));
