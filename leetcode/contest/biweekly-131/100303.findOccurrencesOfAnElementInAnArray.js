/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  const xIndexes = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      xIndexes.push(i);
    }
  }

  if (!xIndexes.length) return new Array(queries.length).fill(-1);

  for (let i = 0; i < queries.length; i++) {
    const index = queries[i] - 1;

    if (index >= xIndexes.length) {
      queries[i] = -1;
    } else {
      queries[i] = xIndexes[index];
    }
  }

  return queries;
};

const inputOne = [[1, 3, 1, 7], [1, 3, 2, 4], 1];
const inputTwo = [[1, 2, 3], [10], 5];
const inputThree = [
  [1, 4, 3, 3, 6, 4, 8, 3, 10],
  [1, 2, 1, 1, 1, 1, 2, 2, 1, 1],
  7,
];

console.log(occurrencesOfElement(...inputThree));
