/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array(nums.length);
  result[0] = nums[0];

  let leftProduct = result[0];
  result[0] = 1;
  for (let i = 1; i < result.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let right = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};

const inputOne = [1, 2, 3, 4];
const inputTwo = [4, 3, 2, 1, 2]; // [12,16,24,48,24]

console.log(productExceptSelf(inputTwo));
