/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // calculate mid
    const mid = Math.floor((left + right) / 2);

    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return left;
};

const inputOne = [[1, 3, 5, 6], 5];
const inputTwo = [[1, 3, 5, 6], 2];

console.log(searchInsert(...inputTwo));
