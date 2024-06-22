/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let stage = 0;
  let op = 0;

  for (const num of nums) {
    if (num === stage) {
      op++;
      stage = stage ? 0 : 1;
    }
  }

  return op;
};

const one = [0, 1, 1, 0, 1];
const two = [1, 0, 0, 0];

console.log(minOperations(one));
console.log("---------");
console.log(minOperations(two));
