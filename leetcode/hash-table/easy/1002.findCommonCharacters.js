/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const map = Array(26).fill(0);

  function code(char) {
    return char.charCodeAt(0) - 97;
  }

  // for the first word
  for (const char of words[0]) {
    map[code(char)]++;
  }

  const temp = Array(26).fill(0);
  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    for (const char of word) {
      temp[code(char)]++;
    }

    for (let j = 0; j < 26; j++) {
      map[j] = Math.min(temp[j], map[j]);
    }

    temp.fill(0);
  }

  const chars = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < map.length; i++) {
    if (map[i]) {
      for (let times = 0; times < map[i]; times++) {
        result.push(chars[i]);
      }
    }
  }

  return result;
};

const inputOne = ["bella", "label", "roller"];

console.log(commonChars(inputOne));
