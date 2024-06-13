/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;

  const swap = (a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  };

  while (j <= k) {
    if (nums[j] == 1) {
      j++;
    } else if (nums[j] == 2) {
      swap(j, k);
      k--;
    } else {
      swap(i, j);
      i++;
      j++;
    }
  }
  return nums;
};

const inputOne = [2, 0, 1];
console.log(sortColors(inputOne));
