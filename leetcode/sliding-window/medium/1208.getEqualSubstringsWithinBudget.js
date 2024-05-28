/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  function cost(i) {
    return Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0));
  }

  let i = 0;
  let j = 0;

  let currCost = 0;
  let maxLen = 0;

  while (j < s.length) {
    currCost += cost(j);

    while (currCost > maxCost) {
      currCost -= cost(i);
      i++;
    }

    maxLen = Math.max(maxLen, j - i + 1);
    j++;
  }

  return maxLen;
};

const inputOne = ["abcd", "bcdf", 3]; // 3
console.log(equalSubstring(...inputOne));
