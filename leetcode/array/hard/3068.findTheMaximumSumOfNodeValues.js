/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  let swapCount = 0;
  let minDiff = Infinity;
  let sum = 0;

  for (const num of nums) {
    const numXorK = num ^ k;

    if (numXorK > num) {
      swapCount++;
      sum += numXorK;
    } else {
      sum += num;
    }

    minDiff = Math.min(minDiff, Math.abs(num - numXorK));
  }

  return swapCount & 1 ? sum - minDiff : sum;
};

const inputOne = [
  [1, 2, 1],
  3,
  [
    [0, 1],
    [0, 2],
  ],
];

const inputTwo = [
  [0, 92, 56, 3, 34, 23, 56],
  7,
  [
    [2, 6],
    [4, 1],
    [5, 0],
    [1, 0],
    [3, 1],
    [6, 3],
  ],
]; // 288

console.log(maximumValueSum(...inputTwo));
