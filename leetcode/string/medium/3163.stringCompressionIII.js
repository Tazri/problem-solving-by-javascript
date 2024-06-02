/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let result = "";

  let sub = "";
  let last = null;

  for (const char of word) {
    if (last === null) {
      last = char;
      sub += char;
      continue;
    }

    if (last === char) {
      if (sub.length >= 9) {
        result += 9 + last;
        sub = char;
      } else {
        sub += char;
      }
    } else {
      result += sub.length + last;
      last = char;
      sub = char;
    }
  }

  result += sub.length + last;

  return result;
};

const inputOne = "aaaaaaaaaaaaaabb";

console.log(compressedString(inputOne));
