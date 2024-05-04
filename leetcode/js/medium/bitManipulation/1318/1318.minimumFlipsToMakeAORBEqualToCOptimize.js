/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let totalFlip = 0;
  while (a | b | c) {
    const A = a & 1;
    const B = b & 1;
    const C = c & 1;

    if (A != B && C == 0) totalFlip++;
    else if (!A && !B && C) totalFlip++;
    else if (A && B && !C) totalFlip += 2;

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return totalFlip;
};

const inputOne = [2, 6, 5];
const inputTwo = [8, 3, 5];
console.log(minFlips(...inputTwo));
