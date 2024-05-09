/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const r = k % nums.length;

  if (r == 0) return;

  nums.reverse();

  function reverse(first, last) {
    while (first < last) {
      [nums[first], nums[last]] = [nums[last], nums[first]];
      first++;
      last--;
    }
  }

  reverse(0, r - 1);
  reverse(r, nums.length - 1);
};

var rotateOrderOfNTime = function (nums, k) {
  const draft = [...nums];
  const r = k % nums.length;
  const midPoint = nums.length - r - 1;

  for (let i = midPoint; i >= 0; i--) {
    nums[i + r] = draft[i];
  }

  for (let i = 0; i < r; i++) {
    nums[i] = draft[midPoint + i + 1];
  }
};

const inputOne = [[1, 2, 3, 4, 5, 6, 7], 3];
const inputTwo = [[1, 2], 3];

console.log(inputOne[0]);
rotate(...inputOne);
console.log(inputOne[0]);
