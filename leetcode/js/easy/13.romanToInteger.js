/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: {
      value: 1,
      order: 0,
    },
    V: {
      value: 5,
      order: 1,
    },
    X: {
      value: 10,
      order: 2,
    },
    L: {
      value: 50,
      order: 3,
    },
    C: {
      value: 100,
      order: 4,
    },
    D: {
      value: 500,
      order: 5,
    },
    M: {
      value: 1000,
      order: 6,
    },
  };

  let total = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = romanMap[s[i]];
    let value = char.value;
    let order = char.order;

    if (i !== 0 && order > romanMap[s[i - 1]].order) {
      value -= romanMap[s[i - 1]].value;
      i--;
    }

    total += value;
  }

  return total;
};

const s = "MCMXCIV";

console.log(romanToInt(s));
