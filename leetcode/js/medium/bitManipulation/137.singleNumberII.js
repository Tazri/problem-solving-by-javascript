/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let k = 0; k <= 31; k++) {
    let pos = 1 << k;
    let countOne = 0;

    for (let num of nums) {
      if (num & pos) countOne++;
    }

    if (countOne % 3 !== 0) {
      result |= pos;
    }
  }

  return result;
};

const inputOne = [0, 1, 0, 1, 0, 1, 99];

console.log(singleNumber(inputOne));

// TODO will optimize this
