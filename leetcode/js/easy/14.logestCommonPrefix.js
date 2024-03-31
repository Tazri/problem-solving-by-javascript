/**
 *
 * @param {string[]} strs
 * @return {string}
 */
var longetstCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }

  let prefix = "";
  let char = "";

  for (let i = 0; i < strs[0].length; i++) {
    char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      let str = strs[j];

      if (str.length - 1 < i) {
        return prefix;
      }

      let charStr = str[i];

      if (charStr !== char) {
        return prefix;
      }
    }

    prefix += char;
    char = "";
  }

  return prefix;
};

const strs = ["flower", "flow", "flight"];
console.log(longetstCommonPrefix(strs));
