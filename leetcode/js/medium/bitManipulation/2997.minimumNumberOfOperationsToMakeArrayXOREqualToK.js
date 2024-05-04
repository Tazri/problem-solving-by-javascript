// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var minOperations = function (nums, k) {
//   let allOr;

//   let totalFlip = 0;
//   do {
//     allOr = 0;
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] & 1) count++;

//       nums[i] >>= 1;
//       allOr |= nums[i];
//     }

//     if (k & 1) {
//       if (count % 2 == 0) totalFlip++;
//     } else {
//       if (count & 1) totalFlip++;
//     }

//     k >>= 1;
//     allOr |= k;
//   } while (allOr);

//   return totalFlip;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let xor = 0;
  for (let num of nums) xor ^= num;

  let totalFlip = 0;

  while (xor | k) {
    if ((xor & 1) != (k & 1)) totalFlip++;

    xor >>= 1;
    k >>= 1;
  }

  return totalFlip;
};

const inputOne = [[2, 1, 3, 4], 1];
const inputTwo = [[2, 0, 2, 0], 0];
const inputThree = [[1, 1, 3, 4, 3, 2], 4]; // 1
const inputFour = [[4], 7];

console.log(minOperations(...inputFour));
