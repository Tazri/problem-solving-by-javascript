const characters = "abcdefghij";
/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  let cumulativeXor = 0;
  const map = new Map();
  map.set(0, 1);

  let result = 0;

  for (const ch of word) {
    const code = get(ch);
    cumulativeXor ^= code;

    if (map.has(cumulativeXor)) {
      result += map.get(cumulativeXor);
    }

    for (let char of characters) {
      const prev = cumulativeXor ^ get(char);

      if (map.has(prev)) {
        result += map.get(prev);
      }
    }

    if (map.has(cumulativeXor)) {
      map.set(cumulativeXor, map.get(cumulativeXor) + 1);
    } else {
      map.set(cumulativeXor, 1);
    }
  }

  return result;
};

/**
 *
 * @param {string} a
 * @return {number}
 */
function get(a) {
  return 1 << (a.charCodeAt(0) - 97);
}

const inputOne = "aba";
const inputTwo = "aabb"; // 9

console.log(wonderfulSubstrings(inputTwo));
