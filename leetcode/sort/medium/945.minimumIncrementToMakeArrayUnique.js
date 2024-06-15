/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  let size = -Infinity;

  for (const num of nums) size = Math.max(num, size);

  const arr = new Array(size + 1);

  for (const num of nums) {
    if (arr[num]) {
      arr[num]++;
    } else {
      arr[num] = 1;
    }
  }

  let extra = 0;
  let take = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (!arr[i]) continue;

    if (arr[i] > 1) {
      extra = arr[i] - 1;

      arr[i + 1] = arr[i + 1] ? arr[i + 1] + extra : extra;
      take += extra;
    }
  }

  extra = arr[size];
  if (extra == undefined || extra <= 1) return take;

  while (extra > 1) {
    take += extra - 1;
    extra--;
  }

  return take;
};

const inputOne = [3, 2, 1, 2, 1, 7];
const inputTwo = [7, 7, 7];

console.log(minIncrementForUnique(inputTwo));
