/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const map = new Map();
  let total = 0;

  for (const ch of word) {
    const k = ch.toLowerCase();
    if (!map.has(k)) {
      map.set(k, ch);
      continue;
    }

    if (!map.get(k)) continue;

    const chCase = k === ch ? "LOWER" : "UPPER";
    const mapCh = map.get(k);
    const mapChCase = mapCh.toLowerCase() === mapCh ? "LOWER" : "UPPER";

    if (chCase !== mapChCase) {
      total++;
      map.set(k, null);
    }
  }

  return total;
};

const word = "aaAbcBC";

console.log(numberOfSpecialChars(word));
