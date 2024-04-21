/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const map = new Map();
  let total = 0;

  for (const ch of word) {
    // console.log(map);
    // console.log("\n\n");
    const isChLower = isLower(ch);
    const key = ch.toLowerCase();

    if (isChLower && !map.has(key)) {
      map.set(key, false);
      continue;
    }

    if (isChLower && map.get(key) === true) {
      map.set(key, null);
      total--;
    }

    if (map.has(key) && map.get(key) === null) continue;

    // if ch is upper but not in map
    if (!isChLower && !map.has(key)) {
      map.set(key, null);
      continue;
    }

    // if it uppercase but before it found lowercase
    if (!isChLower && map.get(key) === false) {
      map.set(key, true);
      total++;
      continue;
    }
  }
  //   console.log(map);
  return total;
};

/**
 *
 * @param {string} ch
 * @return {string}
 */
function isLower(ch) {
  return ch.toLowerCase() === ch ? true : false;
}

const word = "dcbCC";

console.log(numberOfSpecialChars(word));
