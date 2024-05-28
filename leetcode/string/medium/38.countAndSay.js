/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  return encode(countAndSay(n - 1));
};

/**
 *
 * @param {string} s
 * @return {string}
 */
function encode(s) {
  let current = s[0];
  let times = 1;
  let en = "";
  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (current !== char) {
      en += times + current;
      current = char;
      times = 1;
    } else {
      times++;
    }
  }
  en += times + current;
  return en;
}

const input = 4; // 1211

console.log(countAndSay(4));
