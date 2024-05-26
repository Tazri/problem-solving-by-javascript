/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set();

  for (let word of wordDict) {
    set.add(word);
  }

  const result = [];
  let used = 0;

  function backtrack(indx = 0, sentence = "") {
    if (indx >= s.length) {
      if (used === s.length) {
        result.push(sentence);
      }
    }

    let word = "";
    for (let i = indx; i < s.length; i++) {
      word += s[i];

      if (set.has(word)) {
        used += word.length;
        backtrack(i + 1, sentence ? sentence + " " + word : word);
        used -= word.length;
      }
    }
  }

  backtrack();

  return result;
};

const inputOne = ["catsanddog", ["cat", "cats", "and", "sand", "dog"]];
const inputTwo = [
  "pineapplepenapple",
  ["apple", "pen", "applepen", "pine", "pineapple"],
];

console.log(wordBreak(...inputTwo));
