/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();

  for (const num of nums1) {
    const has = map.get(num);

    if (has) {
      map.set(num, has + 1);
    } else {
      map.set(num, 1);
    }
  }

  const result = [];

  for (const num of nums2) {
    const has = map.get(num);

    if (has) {
      result.push(num);
      map.set(num, has - 1);
    }
  }

  return result;
};

const one = [
  [1, 2, 2, 1],
  [2, 2],
];

console.log(intersect(...one));
