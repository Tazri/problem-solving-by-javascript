/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  let result = 0;
  const map = new Map();

  const has = (n) => map.get(n);
  const remove = (n) => map.set(n, map.get(n) - 1);
  const add = (n) => {
    if (has(n)) {
      map.set(n, map.get(n) + 1);
      return;
    }
    map.set(n, 1);
  };

  function backtrack(index = 0) {
    if (index >= nums.length) {
      result++;
      return;
    }

    backtrack(index + 1); // not take

    const n = nums[index];

    if (!has(n - k) && !has(n + k)) {
      add(n);
      backtrack(index + 1);
      remove(n);
    }
  }

  backtrack();
  return result - 1;
};

const inputOne = [[2, 4, 6], 2];
const inputTwo = [[4, 2, 5, 9, 10, 3], 1]; // 23
const inputThree = [[1, 1, 2, 3], 1];
const custom = [[1, 2, 3, 4], 1];
const getWrong = [[12, 18, 10, 5, 6, 2, 18, 3], 8]; // 143

console.log(beautifulSubsets(...getWrong));
