/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const set = new Set();

  let max = -1;
  for (let num of nums) {
    set.add(num);
    if (num > 0 && set.has(-num)) {
      max = Math.max(max, num);
    }

    if (num < 0 && set.has(Math.abs(num))) {
      max = Math.max(max, Math.abs(num));
    }
  }

  return max;
};

const inputOne = [-1, 2, -3, 3];
const inputTwo = [-1, 10, 6, 7, -7, 1];
const inputThree = [-10, 8, 6, 7, -2, -3];

console.log(findMaxK(inputThree));
