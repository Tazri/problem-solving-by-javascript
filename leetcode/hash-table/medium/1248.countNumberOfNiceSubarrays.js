/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const map = Array(nums.length + 1).fill(0);
  map[0]++;

  let oddCount = 0;
  let result = 0;

  for (let num of nums) {
    if (num & 1) oddCount++;

    map[oddCount]++;

    let left = oddCount - k;

    if (left >= 0) {
      result += map[left];
    }
  }

  return result;
};

const inputOne = [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2];

console.log(numberOfSubarrays(...inputOne));
