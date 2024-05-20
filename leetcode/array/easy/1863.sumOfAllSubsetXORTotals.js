/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sumXor = 0;

  for (const num of nums) {
    sumXor |= num;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    sumXor <<= 1;
  }

  return sumXor;
};

var subsetXORSumUsingRecursion = function (nums) {
  let sumXor = 0;

  let xor = 0;
  function solve(i = 0) {
    if (i >= nums.length) {
      sumXor += xor;
      return;
    }

    solve(i + 1);
    xor ^= nums[i];
    solve(i + 1);
    xor ^= nums[i];
  }

  solve();

  return sumXor;
};

const inputOne = [5, 1, 6]; // 28
console.log(subsetXORSum(inputOne));
