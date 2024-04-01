/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const allowed = [];
  let totalRemoved = 0;

  for (let num of nums) {
    if (num !== val) {
      allowed.push(num);
    } else {
      totalRemoved++;
    }
  }

  let i;
  for (i = 0; i < allowed.length; i++) {
    nums[i] = allowed[i];
  }

  for (; i < nums.length; i++) {
    nums[i] = "_";
  }

  return allowed.length;
};
