/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  const t = Math.trunc(time / (n - 1));
  const r = time % (n - 1);

  if (t & 1) {
    return n - r;
  } else {
    return r + 1;
  }
};

const one = [5, 15];
const two = [5, 9];

console.log(passThePillow(...one));
console.log(passThePillow(...two));
