/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  let impactCount = 0;
  let flip = 0;

  for (let i = 0; i < k; i++) {
    let num = nums[i];

    if (flip & 1) {
      num = num ? 0 : 1;
    }

    let left = nums.length - i;

    if (!num && left < k) {
      return -1;
    }

    if (!num) {
      flip++;
      impactCount++;
      nums[i] = true;
    }
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i - k] === true) {
      impactCount--;
    }

    let num = nums[i];

    if (impactCount & 1) {
      num = num ? 0 : 1;
    }

    let left = nums.length - i;

    if (!num && left < k) {
      return -1;
    }

    if (!num) {
      flip++;
      impactCount++;
      nums[i] = true;
    }
  }

  return flip;
};

const one = [[0, 1, 0], 1];
const two = [[0, 0, 0, 1, 0, 1, 1, 0], 3];
const wrong = [[1, 1, 0], 2];
const wrongone = [[1, 0], 2]; // -1

console.log(minKBitFlips(...wrongone));
console.log("-------------");
console.log(minKBitFlips(...two));
console.log("-------------");
console.log(minKBitFlips(...wrong));
