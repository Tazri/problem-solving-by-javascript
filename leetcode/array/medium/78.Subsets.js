/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const allSubset = [];

  let subSet = [];
  function solve(i = 0) {
    if (i >= nums.length) {
      allSubset.push([...subSet]);
      return;
    }

    solve(i + 1);
    subSet.push(nums[i]);
    solve(i + 1);
    subSet.pop();
  }

  solve();

  return allSubset;
};

const inputOne = [1, 2, 3];

console.log(subsets(inputOne));
