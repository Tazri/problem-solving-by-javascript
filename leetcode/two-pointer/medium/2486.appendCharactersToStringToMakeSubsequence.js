/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (j >= t.length) break;

    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  return t.length - j;
};

const inputOne = ["coaching", "coding"];

console.log(appendCharacters(...inputOne));
