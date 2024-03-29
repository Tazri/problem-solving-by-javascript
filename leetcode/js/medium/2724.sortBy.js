/**
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.toSorted((a, b) => {
    const aKey = fn(a);
    const bKey = fn(b);
    return aKey - bKey;
  });
};

const arr = [
  [3, 4],
  [5, 2],
  [10, 1],
];
const fn = (x) => x[1];

console.log(sortBy(arr, fn));
