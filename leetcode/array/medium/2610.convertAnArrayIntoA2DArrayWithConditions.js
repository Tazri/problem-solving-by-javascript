/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const set = new Set();
  const result = [];
  let indexes = [];

  for (let i = 0; i < nums.length; i++) indexes.push(i);

  while (indexes.length) {
    const row = [];
    const leftIndexes = [];

    for (let index of indexes) {
      if (set.has(nums[index])) {
        leftIndexes.push(index);
      } else {
        row.push(nums[index]);
        set.add(nums[index]);
      }
    }

    result.push(row);
    set.clear();
    indexes = leftIndexes;
  }

  return result;
};

const inputOne = [1, 3, 4, 1, 2, 3, 1];

console.log(findMatrix(inputOne));
