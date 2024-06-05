/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const set = new Set();
  let len = 0;

  for (const char of s) {
    if (set.has(char)) {
      len += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  if (set.size) {
    len++;
  }

  return len;
};

const inputOne = "abccccdd";

console.log(longestPalindrome(inputOne));
