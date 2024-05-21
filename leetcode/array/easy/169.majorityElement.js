/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const mid = Math.floor(nums.length / 2);

  let current = null;
  let times = 0;

  for (const num of nums) {
    if (!times) {
      current = num;
      times++;
      continue;
    }

    if (num === current) {
      times++;
      continue;
    }

    times--;
  }

  return current;
};

const inputOne = [2, 2, 1, 1, 1, 2, 2];

const inputTwo = [3, 3, 2, 1, 2, 3, 3];

console.log(majorityElement(inputTwo));
