/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let a = 2;
  let b = 1;
  let turn = 2;
  while (turn < n) {
    turn++;
    let temp = a;
    a = a + b;
    b = temp;
  }
  return a;
};

console.log(climbStairs(5));
