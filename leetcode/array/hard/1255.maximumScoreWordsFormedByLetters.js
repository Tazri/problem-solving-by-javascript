/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  const getScore = (a) => score[a.charCodeAt(0) - 97];
  const letterMap = {};
  const legalWord = [];

  for (const char of letters) {
    if (letterMap[char]) letterMap[char]++;
    else letterMap[char] = 1;
  }

  const wordMap = {};

  // make the wordMap
  for (const word of words) {
    const wmap = {};
    let isLegal = true;

    for (const char of word) {
      if (!letterMap[char]) {
        isLegal = false;
        break;
      }

      if (wmap[char]) {
        wmap[char]++;
      } else {
        wmap[char] = 1;
      }

      if (wmap[char] > letterMap[char]) {
        isLegal = false;
        break;
      }
    }

    if (!isLegal) continue;
    wordMap[word] = wmap;
    legalWord.push(word);
  }

  function isPossibleToForm(word) {
    const wmap = wordMap[word];
    const chars = Object.keys(wmap);

    for (const char of chars) {
      if (wmap[char] > letterMap[char]) return false;
    }

    return true;
  }

  function form(word) {
    const wmap = wordMap[word];
    const chars = Object.keys(wmap);

    let score = 0;
    for (const char of chars) {
      letterMap[char] -= wmap[char];
      score += getScore(char) * wmap[char];
    }

    return score;
  }

  function deform(word) {
    const wmap = wordMap[word];
    const chars = Object.keys(wmap);

    for (const char of chars) {
      letterMap[char] += wmap[char];
    }
  }

  let maxScore = 0;
  let s = 0;

  function solve(index = 0) {
    if (index >= legalWord.length) {
      maxScore = Math.max(s, maxScore);
      return;
    }

    solve(index + 1);
    const word = legalWord[index];
    if (isPossibleToForm(word)) {
      let score = form(word);
      s += score;
      solve(index + 1);
      deform(word);
      s -= score;
    }
  }

  solve();

  return maxScore;
};

const inputOne = [
  ["dog", "cat", "dad", "good"],
  ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
  [
    1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ],
];

const inputTwo = [
  ["e", "bac", "baeba", "eb", "bbbbd", "cad", "c", "c"],
  [
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "e",
    "e",
    "e",
    "e",
  ],
  [
    8, 4, 6, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ],
]; // 95

console.log(maxScoreWords(...inputTwo));
