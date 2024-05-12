/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  const ij = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      ij.push([arr[i], arr[j]]);
    }
  }

  // sort
  ij.sort((a, b) => {
    return a[0] / a[1] - b[0] / b[1];
  });

  if (k - 1 < ij.length) {
    return ij[k - 1];
  } else {
    return 0;
  }
};

const inputOne = [[1, 2, 3, 5], 3];

console.log(kthSmallestPrimeFraction(...inputOne));
