/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let firstIndex = -1;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      firstIndex = i;
      break;
    }
  }

  if (firstIndex === -1) return word;

  word = word.split("");

  for (
    let i = 0, last = firstIndex;
    i <= Math.floor(firstIndex / 2);
    i++, last--
  ) {
    [word[i], word[last]] = [word[last], word[i]];
  }

  return word.join("");
};

const inputOne = ["abcdefd", "d"];

console.log(reversePrefix(...inputOne));
