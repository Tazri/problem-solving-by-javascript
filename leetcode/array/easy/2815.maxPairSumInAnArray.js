/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const map = Array(10).fill(null);
  let max = -1;

  for (let i = 0; i <= nums.length; i++) {
    const digit = maxDigit(nums[i]);

    if (map[digit] === null) {
      map[digit] = nums[i];
      continue;
    }

    max = Math.max(map[digit] + nums[i], max);
    map[digit] = Math.max(map[digit], nums[i]);
  }

  return max;
};

/**
 *
 * @param {number} n
 * @return {number}
 */
function maxDigit(n) {
  let maxDigit = 0;

  while (n) {
    const digit = n % 10;
    n = Math.floor(n / 10);
    maxDigit = Math.max(digit, maxDigit);
  }

  return maxDigit;
}

const inputOne = [1, 2, 3, 4];
const inputTwo = [2536, 1613, 3366, 162]; // 5902

console.log(maxSum(inputTwo));
