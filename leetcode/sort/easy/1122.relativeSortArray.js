/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {};
  for (let i = 0; i < arr2.length; i++) {
    map[arr2[i]] = i;
  }

  // create custom sort function
  function custom(a, b) {
    if (map[a] === undefined && map[b] === undefined) {
      return a - b;
    }

    if (map[b] === undefined) {
      return -1;
    }

    if (map[a] === undefined) {
      return 1;
    }

    if (a === b) return 0;

    return map[a] - map[b];
  }

  return arr1.sort(custom);
};

const inputOne = [
  [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  [2, 1, 4, 3, 9, 6],
];

console.log(relativeSortArray(...inputOne));
