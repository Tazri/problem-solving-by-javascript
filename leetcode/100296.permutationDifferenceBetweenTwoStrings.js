/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  // maping the indexs
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  let sum = 0;

  for (let i = 0; i < t.length; i++) {
    const si = map.get(t[i]);

    sum += Math.abs(si - i);
  }

  return sum;
};

const inputOne = ["abc", "bac"];

console.log(findPermutationDifference(...inputOne));
