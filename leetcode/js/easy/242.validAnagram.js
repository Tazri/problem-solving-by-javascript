/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const map = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    map[s[i].charCodeAt(0) - 97]++;
    map[t[i].charCodeAt(0) - 97]--;
  }

  for (const i of map) if (i) return false;

  return true;
};

const inputOne = ["anagram", "nagaram"];
const inputTwo = ["rat", "car"];

console.log(isAnagram(...inputTwo));
