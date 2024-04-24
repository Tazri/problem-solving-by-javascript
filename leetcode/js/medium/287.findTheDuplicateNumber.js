/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let t = 0;
  let h = 0;

  do {
    t = nums[t];
    h = nums[nums[h]];
  } while (t != h);

  t = 0;
  while (h != t) {
    t = nums[t];
    h = nums[h];
  }

  return t;
};

const arr = [3, 3, 3, 3, 3];

console.log(findDuplicate(arr));
