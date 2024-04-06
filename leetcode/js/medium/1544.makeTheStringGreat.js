const lowerAlpha = new Set("qwertyuioplkjhgfdsazxcvbnm");
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const final = s.split("");

  let i = 0;
  let len = final.length;
  while (i < len - 1) {
    if (len === 1) {
      break;
    }
    if (i < 0) {
      i = 0;
    }
    const first = final[i];
    const second = final[i + 1];

    if (!isOk(first, second)) {
      final.splice(i, 2);
      len -= 2;
      i--;
    } else {
      i++;
    }
  }

  return final.join("");
};

function isOk(a1, a2) {
  const type1 = lowerAlpha.has(a1) ? "LOWER" : "UPPER";
  const type2 = lowerAlpha.has(a2) ? "LOWER" : "UPPER";

  if (a1.toLowerCase() === a2.toLowerCase()) {
    if (type1 !== type2) {
      return false;
    }
  }

  return true;
}

const s = "qFxXfQo";

console.log(makeGood(s));
