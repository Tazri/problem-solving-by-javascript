/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  const map = new Set();
  let xor = 0;

  for (const num of nums) {
    if (map.has(num)) {
      xor ^= num;
    } else {
      map.add(num);
    }
  }

  return xor;
};

const inputone = [1, 2, 2, 1];

console.log(duplicateNumbersXOR(inputone));
