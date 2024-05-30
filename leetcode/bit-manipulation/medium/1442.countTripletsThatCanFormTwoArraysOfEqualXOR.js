/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let xor = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      xor ^= arr[k];

      if (!xor) {
        total += k - i;
      }
    }
  }

  return total;
};

const inputOne = [2, 3, 1, 6, 7];

console.log(countTriplets(inputOne));
