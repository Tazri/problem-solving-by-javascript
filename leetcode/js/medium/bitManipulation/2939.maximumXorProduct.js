const mod = BigInt(10 ** 9 + 7);
/**
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @return {number}
 */
var maximumXorProduct = function (a, b, n) {
  const maxPos = n - 1;
  a = BigInt(a);
  b = BigInt(b);

  for (let i = BigInt(maxPos); i >= 0; i--) {
    const bitMask = BigInt(1) << i;
    const aBit = a & bitMask;
    const bBit = b & bitMask;

    // console.log("For bit " + bitMask.toString(2));
    // console.log(i);
    // console.log("a : " + a.toString(2));
    // console.log("b : " + b.toString(2));
    // console.log(`aBit : ${aBit} | bBit : ${bBit}`);
    if (aBit === bBit) {
      a |= bitMask;
      b |= bitMask;
    } else if (a < b) {
      a |= bitMask;

      if (bBit) {
        b ^= bitMask;
      }
    } else {
      b |= bitMask;
      if (aBit) {
        a ^= bitMask;
      }
    }

    // console.log("----------");
    // console.log("a : " + a.toString(2));
    // console.log("b : " + b.toString(2));
    // console.log("=======\n\n");
  }

  // console.log(a);
  // console.log(b);
  return parseInt((a * b) % mod);
};

const inputOne = [12, 5, 4];
const inputTwo = [53449611838892, 712958946092406, 6];
const inputThree = [6, 7, 5];

// 231850918
console.log(maximumXorProduct(...inputTwo));

// TODO : will fix
