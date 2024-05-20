/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let sum = 0;

  for (let i = 1; i < s.length; i++) sum += score(s[i - 1], s[i]);
  return sum;
};

/**
 *
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function score(a, b) {
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
}

const inputOne = "zaz";

console.log(scoreOfString(inputOne));
