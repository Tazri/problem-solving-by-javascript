/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let count = 0;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    let remainder = sum % k;

    if (remainder < 0) {
      remainder = k + remainder;
    }

    if (map.has(remainder)) {
      const has = map.get(remainder);
      count += has;
      map.set(remainder, has + 1);
    } else {
      map.set(remainder, 1);
    }
  }

  return count;
};

const inputOne = [[-1, 2, 9], 2];

console.log(subarraysDivByK(...inputOne));
