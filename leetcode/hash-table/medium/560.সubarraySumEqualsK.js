/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let result = 0;

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let past = sum - k;

    if (map.has(past)) {
      result += map.get(past);
    }

    const has = map.get(sum);

    if (has) {
      map.set(sum, has + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return result;
};

const inputOne = [[1, 2, 3], 3];
const two = [[1, 1, 1], 2];
const wrong = [[-1, -1, 1], 2];

console.log(subarraySum(...inputOne));
console.log("------------");
console.log(subarraySum(...wrong));
