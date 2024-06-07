/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const set = {};
  for (const word of dictionary) {
    set[word] = 1;
  }

  let currWord = "";
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === " ") {
      result += currWord + " ";
      currWord = "";
      continue;
    }

    currWord += char;
    if (set[currWord]) {
      while (i + 1 < sentence.length && sentence[i + 1] !== " ") {
        i++;
      }
    }
  }

  result += currWord;

  return result;
};

const inputOne = [
  ["cat", "bat", "rat"],
  "the cattle was rattled by the battery",
];

console.log(replaceWords(...inputOne));

// TODO : doing this with trie
