/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  let prev = 0,
    cur = 1,
    turn = 1;

  while (turn++ < n) [prev, cur] = [cur, prev + cur];

  return cur;
};

console.log(fib(6));
