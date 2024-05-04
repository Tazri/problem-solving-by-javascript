/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  const bitsA = a.toString(2);
  const bitsB = b.toString(2);
  const bitsC = c.toString(2);

  const logestLength = Math.max(bitsA.length, bitsB.length, bitsC.length);

  let totalFlip = 0;
  for (let i = 0; i < logestLength; i++) {
    const rA = bitsA[bitsA.length - 1 - i] || "0";
    const rB = bitsB[bitsB.length - 1 - i] || "0";
    const rC = bitsC[bitsC.length - 1 - i] || "0";

    if (rA != rB && rC == 0) {
      totalFlip++;
    } else if (rA == 0 && rB == 0 && rC == 1) {
      totalFlip++;
    } else if (rA == 1 && rB == 1 && rC == 0) {
      totalFlip += 2;
    }
  }

  return totalFlip;
};

const inputOne = [2, 6, 5];
const inputTwo = [8, 3, 5];
console.log(minFlips(...inputTwo));
