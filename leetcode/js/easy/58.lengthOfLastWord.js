/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (length && s[i] === " ") break;
    else if (s[i] !== " ") length++;
  }

  return length;
};

const s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
