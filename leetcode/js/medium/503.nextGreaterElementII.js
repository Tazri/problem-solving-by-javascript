/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let maxIndx = 0;
  let stack = [];
  let len = nums.length;

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[maxIndx]) {
      maxIndx = i;
    }
  }

  stack.push(nums[maxIndx]);
  nums[maxIndx] = -1;

  //  now start traverse from
  // maxIndx to left as a circular array
  let indx = maxIndx - 1;

  if (indx < 0) {
    indx = len + indx;
  }

  //   console.log("=========\n\n");

  for (let i = 0; i < len - 1; i++) {
    // console.log("Stack before update");
    // console.log(stack);
    // console.log(nums);
    let el = nums[indx];
    let peek = stack[stack.length - 1];

    // console.log(`el : ${el} : peek : ${peek}`);

    if (peek > el) {
      stack.push(el);
      nums[indx] = peek;
      //   console.log(stack);
      //   console.log(nums);
      // update index
      indx = indx <= 0 ? len - 1 : indx - 1;
      continue;
    }

    // pop out the array until find the max
    while (stack.length && stack[stack.length - 1] <= el) stack.pop();

    if (stack.length) {
      nums[indx] = stack[stack.length - 1];
      stack.push(el);
    } else {
      stack.push(el);
      nums[indx] = -1;
    }
    // console.log(stack);
    // console.log(nums);
    // update index
    indx = indx <= 0 ? len - 1 : indx - 1;

    // console.log("-----\n\n");
  }

  //   console.log(indx);

  return nums;
};

let nums = [1, 2, 3, 2, 1];
console.log("nums : ");
console.log(nums);
console.log("ans : ");
console.log(nextGreaterElements(nums));
console.log([2, 3, -1, 3, 2]);
