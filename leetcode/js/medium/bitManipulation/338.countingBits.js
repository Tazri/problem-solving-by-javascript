/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  if (n == 2) return [0, 1, 1];

  const bits = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    if (i & 1) {
      bits.push(bits[Math.floor(i / 2)] + 1);
    } else {
      bits.push(bits[i / 2]);
    }
  }

  return bits;
};

console.log(countBits(5));
