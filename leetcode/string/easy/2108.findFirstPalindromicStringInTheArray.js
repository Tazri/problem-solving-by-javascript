/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }
  return "";
};

/**
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const len = s.length;

  for (let i = 0, j = len - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}

const one = ["abc", "car", "ada", "racecar", "cool"];

console.log(firstPalindrome(one));
