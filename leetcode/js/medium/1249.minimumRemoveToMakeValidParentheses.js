/**
 *
 * @param {number[]} indx
 * @param {string} str
 * @returns
 */
function removeIndxChar(indx, str) {
  let len = indx.length;

  if (!len) {
    return str;
  }

  let finalStr = "";
  let i = 0;

  for (let shiftindx = indx.shift(); len > 0; shiftindx = indx.shift(), len--) {
    // console.log(`for shiftindex : ${shiftindx}, i : ${i} `);

    for (; i < shiftindx; i++) {
      // console.log(`i = ${i}`);
      finalStr += str[i];
    }

    i++;
    // console.log("============\n\n");
  }

  for (; i < str.length; i++) {
    finalStr += str[i];
  }

  return finalStr;
}

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const indx = [];

  let str = "";
  let padding = 0;
  let steak = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char == "(") {
      indx.push(i - padding);
      str += char;
      steak++;
    } else if (char === ")" && steak <= 0) {
      padding++;
    } else if (char === ")" && steak) {
      indx.pop();
      steak--;
      str += char;
    } else if (char !== ")" && char !== "(") {
      str += char;
    }
  }

  return removeIndxChar(indx, str);
};

const s = "))((";

console.log(minRemoveToMakeValid(s));
