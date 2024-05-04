/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  if (nums.length <= 2) return nums;
  let aXorb = 0;

  for (let n of nums) aXorb ^= n;

  let set = 1;
  while (!(set & aXorb)) set <<= 1;

  let a = 0;
  for (let n of nums) if (n & set) a ^= n;

  return [a, aXorb ^ a];
};

const inputOne = [1, 2, 1, 3, 2, 5];
const inputTwo = [1, 1, 2, 2, 7, 7, -8, -9, 9, 9];

console.log(singleNumber(inputTwo));
