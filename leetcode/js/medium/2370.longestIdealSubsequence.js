/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  if (k >= 25) return s.length;

  const map = Array(25).fill(0);
  let result = 0;
  for (let ch of s) {
    const code = ch.charCodeAt(0) - 97;
    const large = largest(...leftright(code));
    map[code] = large + 1;

    if (map[code] > result) result = map[code];
  }

  /**
   *
   * @param {string} a
   * @return {number[]}
   */
  function leftright(code) {
    return [Math.max(0, code - k), Math.min(code + k, 25)];
  }

  /**
   *
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  function largest(left, right) {
    let l = 0;
    for (let i = left; i <= right; i++) {
      if (map[i] > l) {
        l = map[i];
      }
    }
    return l;
  }

  return result;
};

const s = "acfgbd";
const k = 2;
console.log(longestIdealString(s, k));
