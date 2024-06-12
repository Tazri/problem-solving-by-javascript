/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, -1);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const r = sum % k;

    if (map.has(r)) {
      if (i - map.get(r) >= 2) {
        return true;
      }
    } else {
      map.set(r, i);
    }
  }

  return false;
};

const inputOne = [[5, 0, 0, 0], 3];

console.log(checkSubarraySum(...inputOne));
