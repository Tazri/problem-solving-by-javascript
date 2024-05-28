/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const n = nums.length;
  const freq = Array(n + 1).fill(0);

  for (const num of nums) freq[Math.min(n, num)]++;

  let cum_sum = 0;
  for (let x = n; x >= 0; x--) {
    cum_sum += freq[x];

    if (x === cum_sum) {
      return x;
    }
  }

  return -1;
};

const inputOne = [0, 4, 3, 0, 4];

console.log(specialArray(inputOne));
